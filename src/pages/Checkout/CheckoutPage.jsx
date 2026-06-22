import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { playSuccessSound } from "../../utils/sound";

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

  playSuccessSound(); // 🔊 optional sound

  navigate("/success"); // 🎉 go to success page
};

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h1>Checkout</h1>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h2>Shipping Details</h2>

          <input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName}</p>
          )}
          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
          />
          {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />
          {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h2>Payment Details</h2>

          <input
            name="cardNumber"
            placeholder="Card Number"
            value={form.cardNumber}
            onChange={handleChange}
          />
          {errors.cardNumber && (
            <p style={{ color: "red" }}>{errors.cardNumber}</p>
          )}
          <input
            name="expiry"
            placeholder="MM/YY"
            value={form.expiry}
            onChange={handleChange}
          />
          {errors.expiry && <p style={{ color: "red" }}>{errors.expiry}</p>}
          <input
            name="cvv"
            placeholder="CVV"
            value={form.cvv}
            onChange={handleChange}
          />
          {errors.cvv && <p style={{ color: "red" }}>{errors.cvv}</p>}
        </div>
      )}

      {/* STEP 3 */}
{step === 3 && (
  <div>
    <h2>Order Confirmation</h2>

    <h3>Shipping To:</h3>
    <p>
      {form.firstName} {form.lastName}
    </p>
    <p>{form.address}</p>
    <p>{form.city} {form.zip}</p>
    <p>{form.email}</p>

    <h3>Payment Method:</h3>
    <p>**** **** **** {form.cardNumber.slice(-4)}</p>

    <h3>Total:</h3>
    <p>${total.toFixed(2)}</p>
  </div>
)}

      {/* BUTTONS */}
      <div style={{ marginTop: 20 }}>
        {step > 1 && <button onClick={prevStep}>Back</button>}

        {step < 3 && <button onClick={nextStep}>Next</button>}

        {step === 3 && <button onClick={handleSubmit}>Place Order</button>}
      </div>
    </div>
  );
}
