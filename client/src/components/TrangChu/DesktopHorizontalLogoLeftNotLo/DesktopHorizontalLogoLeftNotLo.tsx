import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _menu_TypeInlineOnlineStoreFal } from '../_menu_TypeInlineOnlineStoreFal/_menu_TypeInlineOnlineStoreFal';
import { Button_StyleFilledSizeMBrand } from '../Button_StyleFilledSizeMBrand/Button_StyleFilledSizeMBrand';
import { Logo_NameHeaderLogo } from '../Logo_NameHeaderLogo/Logo_NameHeaderLogo';
import classes from './DesktopHorizontalLogoLeftNotLo.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    iconContainer?: boolean;
    forFigma?: boolean;
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
    menuItem?: boolean;
    iconJamIconsOutlineLogosHome5?: boolean;
    badge5?: boolean;
    iconJamIconsOutlineLogosPlus?: boolean;
    menuItem2?: boolean;
  };
  text?: {
    webbyFrames?: ReactNode;
    menuItem?: ReactNode;
    menuItem2?: ReactNode;
    menuItem3?: ReactNode;
    menuItem4?: ReactNode;
    buttonText?: ReactNode;
  };
}
/* @figmaId 2:2059 */
export const DesktopHorizontalLogoLeftNotLo: FC<Props> = memo(function DesktopHorizontalLogoLeftNotLo(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <Logo_NameHeaderLogo
        hide={{
          iconContainer: true,
          forFigma: true,
        }}
        text={{
          webbyFrames: props.text?.webbyFrames || <div className={classes.webbyFrames}>HOSTIE</div>,
        }}
      />
      <div className={classes.frame48}>
        <_menu_TypeInlineOnlineStoreFal
          className={classes._menu}
          hide={{
            menuItem2: true,
            menuItem4: props.hide?.menuItem2,
          }}
          text={{
            menuItem: props.text?.menuItem || <div className={classes.menuItem}>Home</div>,
            menuItem2: props.text?.menuItem2 || <div className={classes.menuItem2}>About</div>,
            menuItem3: props.text?.menuItem3 || <div className={classes.menuItem3}>Thirteen</div>,
            menuItem4: <div className={classes.menuItem4}>Fourteen</div>,
            menuItem5: props.text?.menuItem4 || <div className={classes.menuItem5}>Hosting</div>,
          }}
        />
        <Button_StyleFilledSizeMBrand
          hide={{
            iconJamIconsOutlineLogosPlus: true,
          }}
          text={{
            buttonText: props.text?.buttonText || <div className={classes.buttonText}>Get Started</div>,
          }}
        />
      </div>
    </button>
  );
});
