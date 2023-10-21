import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { GB } from 'country-flag-icons/react/3x2';
import { PL } from 'country-flag-icons/react/3x2';

enum LANGUAGES {
  EN = 'en',
  PL = 'pl',
}

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = useMemo(() => i18n.language, [i18n.language]);
  const isCurrentLanguageEN = currentLanguage === LANGUAGES.EN;

  const handleLanguageChange = () =>
    i18n.changeLanguage(isCurrentLanguageEN ? LANGUAGES.PL : LANGUAGES.EN);

  return (
    <div className='absolute z-10 right-1 sm:right-4 top-1 sm-top-4'>
      <label
        htmlFor='lang-switcher'
        className='inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800'>
        <input
          id='lang-switcher'
          type='checkbox'
          className='hidden peer w-full'
          checked={isCurrentLanguageEN}
          onChange={handleLanguageChange}
        />
        <span className='px-4 py-2 rounded-l-md text-white dark:bg-[#8EB50E] peer-checked:dark:bg-stone-200 peer-checked:dark:text-inherit'>
          <PL title='Poland' className='w-[12px] sm:w-[24px]' />
        </span>
        <span className='px-4 py-2 rounded-r-md dark:bg-stone-200 peer-checked:dark:text-white peer-checked:dark:bg-[#8EB50E]'>
          <GB title='England' className='w-[11px] sm:w-[23px]' />
        </span>
      </label>
    </div>
  );
};
