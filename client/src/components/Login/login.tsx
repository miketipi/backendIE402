import React , {useState} from "react";
import "./style.css";
import axios from 'axios';
import { useAlert } from 'react-alert';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
export const LoginForm = () => {
    const a = require('../../reducer/userReducer')
    const {setUser} = a;
    const alert = useAlert();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[username, setUsername] = useState('');
    const [password, setPassword] =useState('');
    const login = () =>{
        const request = {
            username,
            password
        }
        console.log(username);
        console.log(password);
        axios.post("/userControl/login", login)
        .then(res => {
            if(res.status===200){
                const user = {
                    username : res.data.username,
                    userId : res.data._id,
                    admin : res.data.admin,
                }
                dispatch(setUser(user));
                alert.sucess("Welcome")
                navigate('/');
            }
        }).catch(e => {
            console.log(e);
            alert.error("Error")
        })
    }
    return (
        <div className="index">
            <div className="div-3">
                <div className="div-register-one">
                    <div className="paragraph-register">
                        <div className="text-wrapper-6">Chưa có tài khoản? &nbsp;&nbsp;&nbsp;</div>
                        <a href="/register" className="text-wrapper-7"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đăng ký</a>
                    </div>
                    <div className="div-row">
                        <button onClick={login} className="button-thm-btn">
                            <div className="overlap-group-2">
                                <div className="div-4" />
                                <div className="div-4" />
                                <div className="div-5" />
                                <div className="span-2">
                                    <div className="text-wrapper-8">Đăng nhập</div>
                                </div>
                            </div>
                        </button>
                        <div className="div-wrapper">
                            <input onChange={e => setPassword(e.target.value)} className="input" placeholder="Mật khẩu" />
                        </div>
                        <input onChange={e => setUsername(e.target.value)} className=" input" placeholder="Email" />
                    </div>
                    <div className="paragraph-register-2">
                        <div className="text-wrapper-11">chỉ bằng một nút bấm</div>
                        <p className="p">Hãy đăng nhập để có cơ hội khám phá lăng bác</p>
                    </div>
                    <div className="text-wrapper-12">Đăng nhập</div>
                </div>
            </div>
        </div >
    );
};

