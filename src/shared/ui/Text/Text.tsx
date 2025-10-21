import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Text.module.scss';

export enum TextThema {
    PRIMARY = 'primary',
    ERROR = 'error',

}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextThema
}
export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextThema.PRIMARY,
    } = props;
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
