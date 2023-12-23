import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const RegisterForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);

    function validUserEmail(email: string) {
        let validText = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;
        return email.match(validText) !== null;
    }

    const handleRegister = async () => {
        if (!isAgreed) {
            alert("Vui lòng chấp nhận Điều khoản Dịch vụ và Chính sách Bảo mật!");
            return;
        }
        if (!email || !password || !firstName || !lastName) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        if (!validUserEmail(email)) {
            console.log('Email không hợp lệ!');
            alert("Email không hợp lệ! Vui lòng kiểm tra lại!");
            return;
        }
        try {
            const response = await axios.post('http://localhost:4000/userControl/users', {
                email,
                password,
                admin: false,
                phone: '',
                name: `${lastName} ${firstName} `
            });
            if (response.status === 201) {
                console.log("Đăng ký thành công!");
                alert("Đăng ký thành công!");
                navigate('/login');
            } else {
                console.error("Đăng ký không thành công!");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            {/* <Footer></Footer> */}
            <div className="index">
                <div className="div-3">
                    <div className="div-register-one">
                        <div className="paragraph-register">
                            <div className="text-wrapper-6">Đã có tài khoản?</div>
                            <a href="/login" className="text-wrapper-7">Đăng nhập</a>
                        </div>
                        <div className="b-ng-vi-c-ng-k-b-n-wrapper">
                            <p className="b-ng-vi-c-ng-k-b-n">
                                Bằng việc đăng ký, bạn đã đồng ý về Điều khoản Dịch vụ và Chính sách Bảo mật của chúng tôi.
                            </p>
                            <input type="checkbox" name="agree" onChange={(e) => setIsAgreed(e.target.checked)} />
                        </div>
                        <div className="div-row">
                            <button className="button-thm-btn" onClick={handleRegister}>
                                <div className="overlap-group-2">
                                    <div className="div-4" />
                                    <div className="div-4" />
                                    <div className="div-5" />
                                    <div className="span-2">
                                        <div className="text-wrapper-8">Đăng ký</div>
                                    </div>
                                </div>
                            </button>
                            <div className="overlap-wrapper">
                                <input className="input" type="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="div-wrapper">
                                <input className="input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <input className="input-2" placeholder="Họ" onChange={(e) => setLastName(e.target.value)} />
                            <input className="input-3" placeholder="Tên" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="paragraph-register-2">
                            <div className="text-wrapper-11">khamphalangbac.com</div>
                            <p className="p">Đăng ký để trở thành thành viên của website</p>
                        </div>
                        <div className="text-wrapper-12">Đăng ký</div>
                    </div>
                </div>
            </div >
            {/* <Header></Header> */}
        </div>
    );
}
