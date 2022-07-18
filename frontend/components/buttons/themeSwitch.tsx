import { Icon } from '@iconify/react';

const ThemeSwitch = ({ theme, setTheme }: { theme: string; setTheme: any }) => {
  const onClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    console.log('setting theme', theme);
  };

  return (
    <button onClick={onClick}>
      <Icon
        icon='akar-icons:light-bulb'
        className='text-lg text-primary-darkBlue dark:text-gray-300 hover:text-primary-lightBlue duration-200'
      />
    </button>
  );
};

export default ThemeSwitch;
