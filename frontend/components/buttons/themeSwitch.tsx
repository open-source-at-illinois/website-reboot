import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
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
