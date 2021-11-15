import { useEffect, useState } from "react";

/**
 * for instance:
 * const [text, setState] = useState('')
 * const debouncedText = useDebounce(text, 500)
 *
 * so variable `debouncedText` has been debounced
 *
 * @param {any} value
 * @param {number} delay
 * @return {any} this return has been debounced
 */
export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
}
