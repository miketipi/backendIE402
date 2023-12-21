import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconContainerIcon } from './IconContainerIcon.js';
import classes from './Logo_NameFooterLogo.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    iconContainer?: boolean;
    forFigma?: boolean;
  };
  text?: {
    webbyFrames?: ReactNode;
  };
}
/* @figmaId 2:1712 */
export const Logo_NameFooterLogo: FC<Props> = memo(function Logo_NameFooterLogo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.iconContainer && (
        <div className={classes.iconContainer}>
          <IconContainerIcon className={classes.icon} />
        </div>
      )}
      <div className={classes.text}>
        {props.text?.webbyFrames != null ? (
          props.text?.webbyFrames
        ) : (
          <div className={classes.webbyFrames}>WebbyFrames</div>
        )}
        {!props.hide?.forFigma && <div className={classes.forFigma}>for Figma</div>}
      </div>
    </div>
  );
});
