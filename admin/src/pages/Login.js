import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://localhost:4000/userControl/login",
                { email, password }
            );
            console.log(response.data);
            if (response.status === 200 && response.data.message === 'Login successful' && response.data.admin) {
                console.log("Đăng nhập thành công");
                alert("Đăng nhập thành công!");
                navigate('/home');
            } else {
                console.error("Sai email hoặc mật khẩu");
                alert("Đăng nhập không thành công! Vui lòng kiểm tra lại email và mật khẩu!");
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
                console.error("Sai email hoặc mật khẩu");
                alert("Đăng nhập không thành công! Vui lòng kiểm tra lại email và mật khẩu!");
            } else {
                console.error("Error:", error);
            }
        }
    };

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card text-dark" style={{ borderRadius: '1rem' }}>
                        <div className="card-body p-5 text-center">
                            <h2 className="fw-bold mb-4 text-uppercase">Đăng nhập</h2>
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg input-height"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control form-control-lg input-height"
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <p className="small mb-4 pb-lg-2">
                                <a
                                    className="text-primary text-decoration-none"
                                    href="/forgotpassword"
                                >
                                    Quên mật khẩu?
                                </a>
                            </p>
                            <button
                                className="btn btn-primary btn-block btn-lg "
                                onClick={handleLogin}
                            >
                                Đăng nhập
                            </button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;