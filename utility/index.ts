import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name: string) {
  let parsed = name.split(' ')
  let first = parsed[0] ? parsed[0][0]: '?';
  let second = parsed[1] ? parsed[1][0] : '';
  return {
    sx: {
      bgcolor: stringToColor(name),
      color: '#fff',
      height: '48px',
      width: '48px'
    },
    children: `${first}${second}`,
  };
}


export const capitalizeName = (name:string) => name.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')