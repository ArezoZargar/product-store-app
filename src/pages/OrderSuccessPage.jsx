import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { playSuccessSound } from "../utils/sound";

export default function OrderSuccessPage() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    playSuccessSound();

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success-container">
      {showConfetti && <Confetti />}

      <div className="success-card">
        <div className="success-icon">✔</div>

        <h1>Order Successful!</h1>

        <p>
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <button className="success-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
