import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { MenuItem_VerticalFalseMenuType } from '../MenuItem_VerticalFalseMenuType/MenuItem_VerticalFalseMenuType';
import classes from './_menu_TypeInlineOnlineStoreFal.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    iconJamIconsOutlineLogosHome?: boolean;
    badge?: boolean;
    iconJamIconsOutlineLogosChevro?: boolean;
    iconJamIconsOutlineLogosHome2?: boolean;
    badge2?: boolean;
    iconJamIconsOutlineLogosChevro2?: boolean;
    iconJamIconsOutlineLogosHome3?: boolean;
    badge3?: boolean;
    iconJamIconsOutlineLogosChevro3?: boolean;
    iconJamIconsOutlineLogosHome4?: boolean;
    badge4?: boolean;
    iconJamIconsOutlineLogosChevro4?: boolean;
    iconJamIconsOutlineLogosHome5?: boolean;
    badge5?: boolean;
    iconJamIconsOutlineLogosChevro5?: boolean;
    iconJamIconsOutlineLogosHome6?: boolean;
    badge6?: boolean;
    menuItem?: boolean;
    menuItem2?: boolean;
    menuItem3?: boolean;
    menuItem4?: boolean;
  };
  text?: {
    menuItem?: ReactNode;
    menuItem2?: ReactNode;
    menuItem3?: ReactNode;
    menuItem4?: ReactNode;
    menuItem5?: ReactNode;
  };
}
/* @figmaId 2:2028 */
export const _menu_TypeInlineOnlineStoreFal: FC<Props> = memo(function _menu_TypeInlineOnlineStoreFal(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <MenuItem_VerticalFalseMenuType
        hide={{
          iconJamIconsOutlineLogosHome: true,
          badge: true,
          iconJamIconsOutlineLogosChevro: true,
        }}
        text={{
          menuItem: props.text?.menuItem || <div className={classes.menuItem}>Eleven</div>,
        }}
      />
      <MenuItem_VerticalFalseMenuType
        hide={{
          iconJamIconsOutlineLogosHome: true,
          badge: true,
          iconJamIconsOutlineLogosChevro: true,
        }}
        text={{
          menuItem: props.text?.menuItem2 || <div className={classes.menuItem2}>Twelve</div>,
        }}
      />
      <MenuItem_VerticalFalseMenuType
        hide={{
          iconJamIconsOutlineLogosHome: true,
          badge: true,
          iconJamIconsOutlineLogosChevro: true,
        }}
        text={{
          menuItem: props.text?.menuItem3 || <div className={classes.menuItem3}>Thirteen</div>,
        }}
      />
      {!props.hide?.menuItem && (
        <MenuItem_VerticalFalseMenuType
          hide={{
            iconJamIconsOutlineLogosHome: true,
            badge: true,
            iconJamIconsOutlineLogosChevro: true,
            menuItem: props.hide?.menuItem4,
          }}
          text={{
            menuItem: props.text?.menuItem4 || <div className={classes.menuItem4}>Fourteen</div>,
          }}
        />
      )}
      {!props.hide?.menuItem2 && (
        <MenuItem_VerticalFalseMenuType
          hide={{
            iconJamIconsOutlineLogosHome: true,
            badge: true,
            iconJamIconsOutlineLogosChevro: true,
          }}
          text={{
            menuItem: <div className={classes.menuItem5}>Fifteen</div>,
          }}
        />
      )}
      {!props.hide?.menuItem3 && (
        <MenuItem_VerticalFalseMenuType
          hide={{
            iconJamIconsOutlineLogosHome: true,
            badge: true,
          }}
          text={{
            menuItem: props.text?.menuItem5 || <div className={classes.menuItem6}>Sixteen</div>,
          }}
        />
      )}
    </div>
  );
});
