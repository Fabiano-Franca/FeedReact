import styles from './Avatar.module.css';

type Props = {
    path: string;
    hasBorder?: boolean;
}

export function Avatar({ path, hasBorder = true }: Props){
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={path} alt="" 
        />
    );
}