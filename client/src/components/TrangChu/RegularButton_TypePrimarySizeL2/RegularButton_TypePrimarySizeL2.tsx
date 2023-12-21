import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Placeholder } from '../Placeholder/Placeholder';
import classes from './RegularButton_TypePrimarySizeL2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    buttonLabel?: ReactNode;
  };
}
/* @figmaId 2:1537 */
export const RegularButton_TypePrimarySizeL2: FC<Props> = memo(function RegularButton_TypePrimarySizeL2(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.buttonLabel != null ? (
        props.text?.buttonLabel
      ) : (
        <div className={classes.buttonLabel}>Button label</div>
      )}
    </button>
  );
});
