/**
 * @param {string} src - Импортированный файл или путь из папки public
 * @param {number} volume - Громкость
 */
export const playSound = (src, volume = 0.4) => {
  if (!src) return;

  const audio = new Audio(src);
  audio.volume = Math.max(0, Math.min(1, volume));

  audio.play().catch((err) => {
    console.warn('Audio playback prevented:', err);
  });

  audio.onended = () => {
    audio.src = '';
    audio.load();
  };
};
