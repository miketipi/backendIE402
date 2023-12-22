import React, { useState } from "react";
import "./style.css";
import axios from "axios";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:4000/userControl/login", { email, password });
            if (response.status === 200 && response.data.message === 'Login successful') {
                console.log("Đăng nhập thành công");
            } else {
                console.error("Sai email hoặc mật khẩu");
            }
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                console.error("Sai email hoặc mật khẩu");
            } else {
                console.error("Error:", error);
            }
        }
    };

    return (
        <div className="index">
            <div className="div-3">
                <div className="div-register-one">
                    <div className="paragraph-register">
                        <div className="text-wrapper-6">Chưa có tài khoản? &nbsp;&nbsp;&nbsp;</div>
                        <a href="/register" className="text-wrapper-7"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đăng ký</a>
                    </div>
                    <div className="div-row">
                        <button className="button-thm-btn" onClick={handleLogin}>
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
                            <input className="input" type="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <input className="input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="paragraph-register-2">
                        <div className="text-wrapper-11">chỉ bằng một nút bấm</div>
                        <p className="p">Hãy đăng nhập để có cơ hội khám phá lăng bác</p>
                    </div>
                    <div className="text-wrapper-12">Đăng nhập</div>
                </div>
            </div>
        </div>
    );
};
