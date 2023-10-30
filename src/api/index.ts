import { toast } from 'react-toastify';

import { BASE_API } from '@constants';

export type TGame = {
  name: string;
  description: string;
  code: string;
  icon: string;
  categoryIds: number[];
};

export type TCategory = {
  id: number;
  name: string;
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

export const fetchCategories = async (): Promise<TCategory[]> => {
  try {
    const response = await fetch(`${BASE_API}/categories`);
    const data = await response.json();

    return data;
  } catch (error: unknown) {
    console.log(
      '🚀 ~ file: Categories.tsx:25 ~ fetchCategories ~ error:',
      error,
    );

    toast.error('Something went wrong! Please try again.');

    return [];
  }
};
