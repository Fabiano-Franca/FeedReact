import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean;
};

interface AvatarProps1 extends ImgHTMLAttributes<HTMLImageElement> {
  path: string;
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({ hasBorder = true,...props }: AvatarProps) {
  return <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props} />;
}
