export const debounce = (fn: Function, delay: number) => {
  let timer = 0;

  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const throttle = (fn: Function, delay: number) => {
  let timer = 0;

  return (...args: any) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = 0;
    }, delay);
  };
};
