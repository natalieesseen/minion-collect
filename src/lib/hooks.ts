import { useState, useEffect } from 'react';
import { fetchMinions } from '../utils/fetchMinions';

interface Minion {
  id: number;
  name: string;
  description: string;
  image: string;
}

export function useMinions() {
  const [minions, setMinions] = useState<Minion[]>([]);

  useEffect(() => {
    const loadMinions = async () => {
      try {
        const data = await fetchMinions();
        setMinions(data.results);
      } catch (error) {
        console.log(error)
      }
    };

    loadMinions();
  }, []);

  return { minions };
}