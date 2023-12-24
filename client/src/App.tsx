import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { TrangChu } from './components/TrangChu/TrangChu';
import { LoginForm } from './components/Login/login';
import { RegisterForm } from './components/Register/register';
import TrangMoHinh  from './components/TrangMoHinh/TrangMoHinh'
interface Props {
  className?: string;
}
function External() {
  window.location.href = 'https://profound-muffin-dc51a7.netlify.app/';
  return null;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Router>
        <Routes>
          <Route path="/" element={<TrangChu />} />
          <Route path="/about" element={<TrangChu />} />
          <Route path="/contact" element={<TrangChu />} />
          <Route path="/model" element = {<External/>}/>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm/>}/>
        </Routes>
      </Router>
    </div>
  );
});