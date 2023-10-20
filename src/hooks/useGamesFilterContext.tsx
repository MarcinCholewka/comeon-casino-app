import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

enum ACTION_TYPES {
  SET_CATEGORY = 'setCategory',
  SET_KEYWORD = 'setKeyword',
}

type Props = {
  children: ReactNode;
};

type FiltersState = {
  category: number;
  keyword: string;
};

type FiltersAction =
  | { type: ACTION_TYPES.SET_KEYWORD; payload: string }
  | { type: ACTION_TYPES.SET_CATEGORY; payload: number };

type GamesFiltersContextType = {
  setCategory: (value: number) => void;
  setKeyword: (value: string) => void;
  filters: {
    category: number;
    keyword: string;
  };
};

const GamesFiltersContext = createContext<GamesFiltersContextType>({
  setCategory: () => {},
  setKeyword: () => {},
  filters: {
    category: 0,
    keyword: '',
  },
});

const initialFiltersState = {
  category: 0,
  keyword: '',
};

const reducer = (state: FiltersState, action: FiltersAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CATEGORY:
      return { ...state, category: action.payload };

    case ACTION_TYPES.SET_KEYWORD:
      return { ...state, keyword: action.payload };

    default:
      return state;
  }
};

export const GamesFiltersProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialFiltersState);
  const { category, keyword } = state;

  const setCategory = (value: number) => {
    dispatch({ type: ACTION_TYPES.SET_CATEGORY, payload: value });
  };

  const setKeyword = (value: string) => {
    dispatch({ type: ACTION_TYPES.SET_KEYWORD, payload: value });
  };

  const filters = useMemo(
    () => ({
      category,
      keyword,
    }),
    [category, keyword],
  );

  const value = useMemo(
    () => ({
      setKeyword,
      setCategory,
      filters,
    }),
    [filters],
  );

  return (
    <GamesFiltersContext.Provider value={value}>
      {children}
    </GamesFiltersContext.Provider>
  );
};

export const useGamesFilters = () => {
  return useContext(GamesFiltersContext);
};
