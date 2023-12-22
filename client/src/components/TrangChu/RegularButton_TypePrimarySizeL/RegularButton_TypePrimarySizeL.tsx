import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Placeholder } from '../Placeholder/Placeholder';
import classes from './RegularButton_TypePrimarySizeL.module.css';

interface Props {
  className?: string;
  classes?: {
    ring?: string;
    root?: string;
  };
  text?: {
    buttonLabel?: ReactNode;
  };
}
/* @figmaId 2:1605 */
export const RegularButton_TypePrimarySizeL: FC<Props> = memo(function RegularButton_TypePrimarySizeL(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.buttonLabel != null ? (
        props.text?.buttonLabel
      ) : (
        <div className={classes.buttonLabel}>Button label</div>
      )}
      <div className={`${props.classes?.ring || ''} ${classes.ring}`}></div>
    </button>
  );
});
