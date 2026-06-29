import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { playSuccessSound } from "../../utils/sound";
import Navbar from "../../components/Navbar/Navbar";

export default function CheckoutPage() {
  const items = useSelector((state) => state.cart.items);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!form.firstName) newErrors.firstName = "Required";
      if (!form.lastName) newErrors.lastName = "Required";
      if (!form.email) newErrors.email = "Required";
      if (!form.address) newErrors.address = "Required";
      if (!form.city) newErrors.city = "Required";
    }

    if (step === 2) {
      if (!form.cardNumber) newErrors.cardNumber = "Required";
      if (!form.expiry) newErrors.expiry = "Required";
      if (!form.cvv) newErrors.cvv = "Required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const nextStep = () => {
    if (validateStep()) {
      setStep((s) => Math.min(s + 1, 3));
    }
  };
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();

    playSuccessSound();
    navigate("/success");
  };

  return (
    <div className="checkout-page">
      <Navbar />

      <div className="checkout-container">
        <div className="checkout-form">
          <h1 className="step-title">Checkout</h1>

          {step === 1 && (
            <>
              <h2 className="step-title">Shipping Details</h2>

              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}

              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}

              <input
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <input
                placeholder="Adress"
                name="address"
                value={form.address}
                onChange={handleChange}
              />
              {errors.address && <p className="error">{errors.address}</p>}

              <input
                placeholder="City"
                name="city"
                value={form.city}
                onChange={handleChange}
              />
              {errors.city && <p className="error">{errors.city}</p>}
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="step-title">Payment Details</h2>

              <input
                placeholder="Card Number"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
              />
              {errors.cardNumber && (
                <p className="error">{errors.cardNumber}</p>
              )}

              <input
                placeholder="Expiry"
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
              />
              {errors.expiry && <p className="error">{errors.expiry}</p>}

              <input
                placeholder="CVV"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
              />
              {errors.cvv && <p className="error">{errors.cvv}</p>}
            </>
          )}

          {step === 3 && (
            <div className="order-summary">
              <h2 className="step-title">Order Confirmation</h2>

              <p className="info">
                {form.firstName} {form.lastName}
              </p>
              <p className="info">{form.address}</p>
              <p className="info">{form.city}</p>
              <p className="info">{form.email}</p>

              <h3 className="info">Total: ${total.toFixed(2)}</h3>
            </div>
          )}

          <div className="checkout-actions">
            {step > 1 && (
              <button className="checkout-btn" onClick={prevStep}>
                Back
              </button>
            )}

            {step < 3 && (
              <button className="checkout-btn" onClick={nextStep}>
                Next
              </button>
            )}

            {step === 3 && (
              <button className="checkout-btn" onClick={handleSubmit}>
                Place Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
