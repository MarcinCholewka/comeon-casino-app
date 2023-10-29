import { toast } from 'react-toastify';

import { BASE_API } from '@constants';

export type TGame = {
  name: string;
  description: string;
  code: string;
  icon: string;
  categoryIds: number[];
};

export const fetchGames = async (): Promise<TGame[]> => {
  try {
    const response = await fetch(`${BASE_API}/games`);
    const data = await response.json();

    return data;
  } catch (error: unknown) {
    console.error('🚀 ~ file: Games.tsx:31 ~ fetchGames ~ error:', error);

    toast.error('Something went wrong! Please try again.');

    return [];
  }
};
