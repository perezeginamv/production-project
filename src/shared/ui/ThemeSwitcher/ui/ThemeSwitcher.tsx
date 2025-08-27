import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps{
  className?:string
}
export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
    const {theme, toggleTheme} =useTheme();

   return (
    <Button onClick={toggleTheme} 
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
        {theme===Theme.DARK?<DarkIcon/>:<LightIcon/>} 
    </Button>
   );
}