import { useState, useEffect, memo } from 'react';
import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _menu_TypeInlineOnlineStoreFal } from '../TrangChu/_menu_TypeInlineOnlineStoreFal/_menu_TypeInlineOnlineStoreFal';
import { Button_StyleFilledSizeMBrand } from '../TrangChu/Button_StyleFilledSizeMBrand/Button_StyleFilledSizeMBrand';
import { Logo_NameHeaderLogo } from '../TrangChu/Logo_NameHeaderLogo/Logo_NameHeaderLogo';
import classes from './Header.module.css';
import { Link } from "react-router-dom";

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
export const Header: FC<Props> = memo(function Header(props = {}) {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Simulating a successful login
    // You should replace this with your actual login logic
    // For example, you can check if the user has a valid token in local storage
    const login = () => {
      setLoggedIn(true);
      setUsername("John"); // Set the username here
    };

    // Call the login function after a delay to simulate an asynchronous login process
    setTimeout(login, 2000);
  }, []);

  function handleMenuItemClick(path: string) {
    navigate(path);
  }

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
          webbyFrames: props.text?.webbyFrames || <div className={classes.webbyFrames}>KHÁM PHÁ LĂNG BÁC</div>,
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
            menuItem: (
              <div
                className={classes.menuItem}
                onClick={() => handleMenuItemClick('/')}
              >
                Trang chủ
              </div>
            ),
            menuItem2: (
              <div
                className={classes.menuItem2}
                onClick={() => handleMenuItemClick('/model')}
              >
                Mô hình 3D
              </div>
            ),
            menuItem3: (
              <div
                className={classes.menuItem3}
                onClick={() => handleMenuItemClick('/contact')}
              >
                Liên hệ
              </div>
            ),
            menuItem4: <div className={classes.menuItem4}></div>,
            menuItem5: (
              <div
                className={classes.menuItem5}
                onClick={() => handleMenuItemClick('/repair-report')}
              >
                Báo cáo sửa chữa
              </div>
            ),
          }}
        />
        {loggedIn ? (
          <div className={classes.buttonTextHello}>
            Xin chào {username}
          </div>
        ) : (
          <Button_StyleFilledSizeMBrand
            hide={{
              iconJamIconsOutlineLogosPlus: true,
            }}
            text={{
              buttonText: (
                <div
                  className={classes.buttonText}
                  onClick={() => handleMenuItemClick('/login')}
                >
                  Đăng nhập
                </div>
              ),
            }}
          />
        )}
      </div>
    </button>
  );
});