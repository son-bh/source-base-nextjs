export const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
};

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
};

export const formatTime = timeInSeconds => {
  const seconds = timeInSeconds % 60;
  return `${String(seconds).padStart(2, '0')}`;
};
