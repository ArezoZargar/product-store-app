import { toast } from "react-toastify";

function playSound() {
  const audio = new Audio("/sounds/notify.mp3");
  audio.volume = 0.5;

  audio.play().catch(() => {});
}

export function notifySuccess(message) {
  toast.success(message);
  playSound();
}

export function notifyWarning(message) {
  toast.warning(message);
  playSound();
}

export function notifyError(message) {
  toast.error(message);
  playSound();
}

export function notifyInfo(message) {
  toast.info(message);
  playSound();
}
