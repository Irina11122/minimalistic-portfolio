import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    if (!stored) return initialValue;

    try {
      return JSON.parse(stored); // try parsing JSON
    } catch {
      return stored; // fallback for plain strings like "dark"
    }
  });

  const setStoredValue = (val) => {
    setValue(val);
    localStorage.setItem(key, JSON.stringify(val)); // always stringify when saving
  };

  return [value, setStoredValue];
}
