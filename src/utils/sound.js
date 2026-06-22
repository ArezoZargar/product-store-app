export function playSuccessSound() {
  const audio = new Audio("/sounds/notify.mp3");
  audio.volume = 0.6;

  audio.play().catch((err) => {
    console.log("Sound blocked:", err);
  });
}