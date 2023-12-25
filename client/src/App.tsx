import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { TrangChu } from './components/TrangChu/TrangChu';
import { LoginForm } from './components/Login/login';
import { RegisterForm } from './components/Register/register';
import  { TrangMoHinhTest }  from './components/TrangMoHinh/TrangMoHinhTest';
interface Props {
  className?: string;
}

export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Router>
        <Routes>
          <Route path="/" element={<TrangChu />} />
          <Route path="/about" element={<TrangChu />} />
          <Route path="/contact" element={<TrangChu />} />
          <Route path="/model" element = {<TrangChu/>}/>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/TrangMoHinh" element = {<TrangMoHinhTest/>}/>
        </Routes>
      </Router>
    </div>
  );
});