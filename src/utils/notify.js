import { toast } from "react-toastify";

// 🔊 sound helper
function playSound() {
  const audio = new Audio("/sounds/notify.mp3");
  audio.volume = 0.5;

  audio.play().catch(() => {});
}

// 🎯 SUCCESS
export function notifySuccess(message) {
  toast.success(message);
  playSound();
}
// Warning
export function notifyWarning(message) {
  toast.warning(message);
  playSound();
}

// ❌ ERROR
export function notifyError(message) {
  toast.error(message);
  playSound();
}

// ⚠️ INFO
export function notifyInfo(message) {
  toast.info(message);
  playSound();
}