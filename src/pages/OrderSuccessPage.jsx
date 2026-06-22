import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { playSuccessSound } from "../utils/sound";

export default function OrderSuccessPage() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    playSuccessSound(); // 🔊 sound

    const timer = setTimeout(() => {
      setShowConfetti(false); // stop confetti after 5 sec
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      
      {showConfetti && <Confetti />} {/* 🎊 animation */}

      <div style={styles.card}>
        <div style={styles.icon}>✔️</div>

        <h1>Order Successful!</h1>
        <p>Your order has been placed 🎉</p>

        <button style={styles.button} onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#cac4d1",
  },
  card: {
    textAlign: "center",
    padding: "40px",
    background: "white",
    borderRadius: "15px",
    animation: "pop 0.5s ease",
  },
  icon: {
    fontSize: "70px",
    color: "green",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};