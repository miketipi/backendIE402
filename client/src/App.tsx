import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { TrangChu } from './components/TrangChu/TrangChu';
import { LoginForm } from './components/Login/login';
import { RegisterForm } from './components/Register/register';
import { Route, Routes } from 'react-router-dom';
interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <LoginForm/>
    </div>
  );
});
