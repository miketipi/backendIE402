import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import classes from "../TrangChu/TrangChu.module.css";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const nav = () => {
        navigate("/Login");
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post<{ message: string }>(
                "http://localhost:4000/userControl/login",
                { email, password }
            );

            if (response.status === 200 && response.data.message === 'Login successful') {
                console.log("Đăng nhập thành công");
                alert("Đăng nhập thành công!");
                navigate('/');
            } else {
                console.error("Sai email hoặc mật khẩu");
                alert("Đăng nhập không thành công! Vui lòng kiểm tra lại email và mật khẩu!");
            }
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
                console.error("Sai email hoặc mật khẩu");
                alert("Đăng nhập không thành công! Vui lòng kiểm tra lại email và mật khẩu!");
            } else {
                console.error("Error:", error);
            }
        }
    };

    return (
        <div className="index">
            <div >
                <div className="div-3">
                    <div className="div-register-one">
                        <div className="paragraph-register">
                            <div className="text-wrapper-6">Chưa có tài khoản? &nbsp;&nbsp;&nbsp;</div>
                            <Link to="/register" className="text-wrapper-7"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đăng ký</Link>
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
            <Header
                className={classes.desktopHorizontalLogoLeftNotLo}
                hide={{
                    menuItem2: true,
                }}
                text={{
                    webbyFrames: (
                        <div className={classes.webbyFrames}>KHÁM PHÁ LĂNG BÁC</div>
                    ),
                    menuItem: <div className={classes.menuItem15}>Trang chủ</div>,
                    menuItem2: <div className={classes.menuItem16}>Mô hình 3D</div>,
                    menuItem3: <div className={classes.menuItem17}>Liên hệ</div>,
                    menuItem4: <div className={classes.menuItem18}>Báo cáo sửa chữa</div>,
                    buttonText: <div onClick={nav} className={classes.buttonText2}>Đăng nhập</div>,
                }}
            />

            <Footer
                className={classes.footer}
                classes={{ menuItem28: classes.menuItem14 }}
                hide={{
                    logoContainer: true,
                    form1FieldButton: true,
                    menuItem4: true,
                }}
                text={{
                    menuItem: <div className={classes.menuItem}>ĐỐI TÁC</div>,
                    menuItem2: (
                        <div className={classes.menuItem2}>Đăng ký nhà cung cấp</div>
                    ),
                    menuItem3: <div className={classes.menuItem3}>Đối tác đăng nhập</div>,
                    menuItem4: <div className={classes.menuItem4}>Đối tác liên kết</div>,
                    menuItem5: (
                        <div className={classes.menuItem5}>
                            Chương trình cho người nổi tiếng
                        </div>
                    ),
                    menuItem6: (
                        <div className={classes.menuItem6}>Điều khoản sử dụng</div>
                    ),
                    menuItem7: (
                        <div className={classes.menuItem7}>Điều khoản sử dụng</div>
                    ),
                    menuItem8: (
                        <div className={classes.menuItem8}>Chính sách bảo mật</div>
                    ),
                    menuItem9: (
                        <div className={classes.menuItem9}>Chính sách và quy định</div>
                    ),
                    menuItem10: <div className={classes.menuItem10}>Phiếu quà tặng </div>,
                    menuItem11: <div className={classes.menuItem11}>Về chúng tôi</div>,
                    menuItem12: <div className={classes.menuItem12}>Về chúng tôi</div>,
                    menuItem13: <div className={classes.menuItem13}>Blog</div>,
                    companyName202XAllRightsReserv: (
                        <div className={classes.companyName202XAllRightsReserv}>
                            UIT @ 2023. All rights reserved.
                        </div>
                    ),
                }}
            />
        </div>
    );
};