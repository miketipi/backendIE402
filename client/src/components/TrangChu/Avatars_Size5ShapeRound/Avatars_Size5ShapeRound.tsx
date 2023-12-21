import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatars_Size5ShapeRound.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2:1455 */
export const Avatars_Size5ShapeRound: FC<Props> = memo(function Avatars_Size5ShapeRound(props = {}) {
  return (
    <div
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    ></div>
  );
});
