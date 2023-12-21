import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconJamIconsOutlineLogosPlus } from '../IconJamIconsOutlineLogosPlus/IconJamIconsOutlineLogosPlus';
import classes from './FAQItem_OpenFalse.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    question?: ReactNode;
  };
}
/* @figmaId 2:1516 */
export const FAQItem_OpenFalse: FC<Props> = memo(function FAQItem_OpenFalse(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.toggle}>
        {props.text?.question != null ? props.text?.question : <div className={classes.question}>Question</div>}
        <IconJamIconsOutlineLogosPlus />
      </div>
    </div>
  );
});
