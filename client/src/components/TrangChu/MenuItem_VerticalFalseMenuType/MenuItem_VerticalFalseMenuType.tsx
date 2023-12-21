import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Badge_SizeXXSDotFalseRemoveBut } from '../Badge_SizeXXSDotFalseRemoveBut/Badge_SizeXXSDotFalseRemoveBut';
import { IconJamIconsOutlineLogosChevro } from '../IconJamIconsOutlineLogosChevro/IconJamIconsOutlineLogosChevro';
import { IconJamIconsOutlineLogosHome } from '../IconJamIconsOutlineLogosHome/IconJamIconsOutlineLogosHome';
import classes from './MenuItem_VerticalFalseMenuType.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    iconJamIconsOutlineLogosHome?: boolean;
    badge?: boolean;
    iconJamIconsOutlineLogosChevro?: boolean;
    menuItem?: boolean;
  };
  text?: {
    menuItem?: ReactNode;
  };
}
/* @figmaId 2:1993 */
export const MenuItem_VerticalFalseMenuType: FC<Props> = memo(function MenuItem_VerticalFalseMenuType(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.iconJamIconsOutlineLogosHome && <IconJamIconsOutlineLogosHome />}
      {!props.hide?.menuItem &&
        (props.text?.menuItem != null ? props.text?.menuItem : <div className={classes.menuItem}>Menu Item</div>)}
      {!props.hide?.badge && <Badge_SizeXXSDotFalseRemoveBut />}
      {!props.hide?.iconJamIconsOutlineLogosChevro && <IconJamIconsOutlineLogosChevro />}
    </div>
  );
});
