import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../_resets.module.css';
import { Form1FieldButton } from '../TrangChu/Form1FieldButton/Form1FieldButton';
import { _menu_TypeInlineOnlineStoreFal } from '../TrangChu/_menu_TypeInlineOnlineStoreFal/_menu_TypeInlineOnlineStoreFal';
import { Button_StyleFilledSizeMBrandAp } from '../TrangChu/Button_StyleFilledSizeMBrandAp/Button_StyleFilledSizeMBrandAp';
import { Button_StyleOutlineSizeMBrandG } from '../TrangChu/Button_StyleOutlineSizeMBrandG/Button_StyleOutlineSizeMBrandG';
import { IconJamIconsOutlineLogosFacebo } from '../TrangChu/IconJamIconsOutlineLogosFacebo/IconJamIconsOutlineLogosFacebo';
import { IconJamIconsOutlineLogosInstag } from '../TrangChu/IconJamIconsOutlineLogosInstag/IconJamIconsOutlineLogosInstag';
import { IconJamIconsOutlineLogosLinked } from '../TrangChu/IconJamIconsOutlineLogosLinked/IconJamIconsOutlineLogosLinked';
import { IconJamIconsOutlineLogosTwitte } from '../TrangChu/IconJamIconsOutlineLogosTwitte/IconJamIconsOutlineLogosTwitte';
import { IconJamIconsOutlineLogosYoutub } from '../TrangChu/IconJamIconsOutlineLogosYoutub/IconJamIconsOutlineLogosYoutub';
import { Logo_NameFooterLogo } from '../TrangChu/Logo_NameFooterLogo/Logo_NameFooterLogo';
import { MenuItem_VerticalFalseMenuType } from '../TrangChu/MenuItem_VerticalFalseMenuType/MenuItem_VerticalFalseMenuType';
import classes from './Footer.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    menuItem28?: string;
    root?: string;
  };
  hide?: {
    iconContainer?: boolean;
    forFigma?: boolean;
    iconJamIconsOutlineLogosChevro?: boolean;
    iconJamIconsOutlineLogosPlus?: boolean;
    iconJamIconsOutlineLogosHome?: boolean;
    badge?: boolean;
    iconJamIconsOutlineLogosChevro2?: boolean;
    iconJamIconsOutlineLogosHome2?: boolean;
    badge2?: boolean;
    iconJamIconsOutlineLogosChevro3?: boolean;
    iconJamIconsOutlineLogosHome3?: boolean;
    badge3?: boolean;
    iconJamIconsOutlineLogosChevro4?: boolean;
    iconJamIconsOutlineLogosHome4?: boolean;
    badge4?: boolean;
    iconJamIconsOutlineLogosChevro5?: boolean;
    iconJamIconsOutlineLogosHome5?: boolean;
    badge5?: boolean;
    iconJamIconsOutlineLogosChevro6?: boolean;
    iconJamIconsOutlineLogosHome6?: boolean;
    badge6?: boolean;
    iconJamIconsOutlineLogosChevro7?: boolean;
    iconJamIconsOutlineLogosHome7?: boolean;
    badge7?: boolean;
    iconJamIconsOutlineLogosChevro8?: boolean;
    iconJamIconsOutlineLogosHome8?: boolean;
    badge8?: boolean;
    iconJamIconsOutlineLogosChevro9?: boolean;
    iconJamIconsOutlineLogosHome9?: boolean;
    badge9?: boolean;
    iconJamIconsOutlineLogosChevro10?: boolean;
    iconJamIconsOutlineLogosHome10?: boolean;
    badge10?: boolean;
    iconJamIconsOutlineLogosChevro11?: boolean;
    iconJamIconsOutlineLogosHome11?: boolean;
    badge11?: boolean;
    iconJamIconsOutlineLogosChevro12?: boolean;
    iconJamIconsOutlineLogosHome12?: boolean;
    badge12?: boolean;
    iconJamIconsOutlineLogosChevro13?: boolean;
    iconJamIconsOutlineLogosHome13?: boolean;
    badge13?: boolean;
    iconJamIconsOutlineLogosChevro14?: boolean;
    iconJamIconsOutlineLogosHome14?: boolean;
    badge14?: boolean;
    iconJamIconsOutlineLogosChevro15?: boolean;
    iconJamIconsOutlineLogosHome15?: boolean;
    badge15?: boolean;
    iconJamIconsOutlineLogosChevro16?: boolean;
    iconJamIconsOutlineLogosHome16?: boolean;
    badge16?: boolean;
    iconJamIconsOutlineLogosChevro17?: boolean;
    iconJamIconsOutlineLogosHome17?: boolean;
    badge17?: boolean;
    iconJamIconsOutlineLogosChevro18?: boolean;
    iconJamIconsOutlineLogosHome18?: boolean;
    badge18?: boolean;
    iconJamIconsOutlineLogosChevro19?: boolean;
    iconJamIconsOutlineLogosHome19?: boolean;
    badge19?: boolean;
    iconJamIconsOutlineLogosChevro20?: boolean;
    iconJamIconsOutlineLogosHome20?: boolean;
    badge20?: boolean;
    iconJamIconsOutlineLogosChevro21?: boolean;
    menuItem?: boolean;
    menuItem2?: boolean;
    menuItem3?: boolean;
    logoContainer?: boolean;
    form1FieldButton?: boolean;
    menuItem4?: boolean;
  };
  text?: {
    menuItem?: ReactNode;
    menuItem2?: ReactNode;
    menuItem3?: ReactNode;
    menuItem4?: ReactNode;
    menuItem5?: ReactNode;
    menuItem6?: ReactNode;
    menuItem7?: ReactNode;
    menuItem8?: ReactNode;
    menuItem9?: ReactNode;
    menuItem10?: ReactNode;
    menuItem11?: ReactNode;
    menuItem12?: ReactNode;
    menuItem13?: ReactNode;
    companyName202XAllRightsReserv?: ReactNode;
  };
}
/* @figmaId 2:1661 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.top}>
        {!props.hide?.logoContainer && (
          <div className={classes.logoContainer}>
            <Logo_NameFooterLogo
              className={classes.logo}
              hide={{
                iconContainer: true,
                forFigma: true,
              }}
              text={{
                webbyFrames: <div className={classes.webbyFrames}>HOSTIE</div>,
              }}
            />
          </div>
        )}
        <div className={classes.top2}>
          {!props.hide?.form1FieldButton && (
            <Form1FieldButton
              text={{
                text: <div className={classes.text}>Enter your email to get the latest news...</div>,
                buttonText: <div className={classes.buttonText}>Xác nhận</div>,
              }}
            />
          )}
        </div>
      </div>
      <div className={classes.rectangle11}></div>
      <div className={classes.columns}>
        <div className={classes.menu}>
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem2}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem || <div className={classes.menuItem}>Column One</div>,
            }}
          />
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem4}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem2 || <div className={classes.menuItem3}>Twenty One</div>,
            }}
          />
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem6}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem3 || <div className={classes.menuItem5}>Thirty Two</div>,
            }}
          />
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem8}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem4 || <div className={classes.menuItem7}>Fourty Three</div>,
            }}
          />
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem10}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem5 || <div className={classes.menuItem9}>Fifty Four</div>,
            }}
          />
        </div>
        <div className={classes.menu2}>
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem12}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem6 || <div className={classes.menuItem11}>Column Two</div>,
            }}
          />
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem14}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem7 || <div className={classes.menuItem13}>Sixty Five</div>,
            }}
          />
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem16}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem8 || <div className={classes.menuItem15}>Seventy Six</div>,
            }}
          />
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem18}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem9 || <div className={classes.menuItem17}>Eighty Seven</div>,
            }}
          />
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem20}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem10 || <div className={classes.menuItem19}>Ninety Eight</div>,
            }}
          />
        </div>
        <div className={classes.menu3}>
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem22}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem11 || <div className={classes.menuItem21}>Column Three</div>,
            }}
          />
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem24}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem12 || <div className={classes.menuItem23}>One Two</div>,
            }}
          />
          <MenuItem_VerticalFalseMenuType
            className={classes.menuItem26}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: props.text?.menuItem13 || <div className={classes.menuItem25}>Three Four</div>,
            }}
          />
          <MenuItem_VerticalFalseMenuType
            className={`${props.classes?.menuItem28 || ''} ${classes.menuItem28}`}
            hide={{
              iconJamIconsOutlineLogosHome: true,
              badge: true,
              iconJamIconsOutlineLogosChevro: true,
            }}
            text={{
              menuItem: <div className={classes.menuItem27}>Liên hệ</div>,
            }}
          />
          {!props.hide?.menuItem4 && (
            <MenuItem_VerticalFalseMenuType
              className={classes.menuItem30}
              hide={{
                iconJamIconsOutlineLogosHome: true,
                badge: true,
                iconJamIconsOutlineLogosChevro: true,
              }}
              text={{
                menuItem: <div className={classes.menuItem29}>Seven Eight</div>,
              }}
            />
          )}
        </div>
        <div className={classes.menu4}>
          <div className={classes.top3}>
            <MenuItem_VerticalFalseMenuType
              className={classes.menuItem32}
              hide={{
                iconJamIconsOutlineLogosHome: true,
                badge: true,
                iconJamIconsOutlineLogosChevro: true,
              }}
              text={{
                menuItem: <div className={classes.menuItem31}>Tải về</div>,
              }}
            />
            <div className={classes.buttonsGroup}>
              <Button_StyleFilledSizeMBrandAp />
              <Button_StyleOutlineSizeMBrandG
                text={{
                  gETITON: <div className={classes.gETITON}>GET IT ON</div>,
                }}
              />
            </div>
          </div>
          <div className={classes.bottom}>
            <MenuItem_VerticalFalseMenuType
              className={classes.menuItem34}
              hide={{
                iconJamIconsOutlineLogosHome: true,
                badge: true,
                iconJamIconsOutlineLogosChevro: true,
              }}
              text={{
                menuItem: <div className={classes.menuItem33}>Join Us</div>,
              }}
            />
            <div className={classes.socialIcons}>
              <IconJamIconsOutlineLogosYoutub
                swap={{
                  vector: <VectorIcon className={classes.icon} />,
                }}
              />
              <IconJamIconsOutlineLogosFacebo
                swap={{
                  vector: <VectorIcon2 className={classes.icon2} />,
                }}
              />
              <IconJamIconsOutlineLogosTwitte
                swap={{
                  vector: <VectorIcon3 className={classes.icon3} />,
                }}
              />
              <IconJamIconsOutlineLogosInstag
                swap={{
                  vector: <VectorIcon4 className={classes.icon4} />,
                  vector2: <VectorIcon5 className={classes.icon5} />,
                  vector3: <VectorIcon6 className={classes.icon6} />,
                }}
              />
              <IconJamIconsOutlineLogosLinked
                swap={{
                  vector: <VectorIcon7 className={classes.icon7} />,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rectangle10}></div>
      <div className={classes.bottom2}>
        {props.text?.companyName202XAllRightsReserv != null ? (
          props.text?.companyName202XAllRightsReserv
        ) : (
          <div className={classes.companyName202XAllRightsReserv}>CompanyName @ 202X. All rights reserved.</div>
        )}
        <_menu_TypeInlineOnlineStoreFal
          className={classes._menu}
          hide={{
            menuItem: true,
            menuItem2: true,
            menuItem3: true,
          }}
          text={{
            menuItem: <div className={classes.menuItem35}>Hotline</div>,
            menuItem2: <div className={classes.menuItem36}>08152373327</div>,
            menuItem3: <div className={classes.menuItem37}></div>,
          }}
        />
      </div>
    </div>
  );
});
