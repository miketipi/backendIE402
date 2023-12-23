import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Link } from 'react-router-dom';
import classes from "../TrangChu/TrangChu.module.css";

export const RegisterForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);

    const nav = () => {
        navigate("/Login");
    }

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
        <div className="index">
            <div >
                <div className="div-3">
                    <div className="div-register-one">
                        <div className="paragraph-register">
                            <div className="text-wrapper-6">Đã có tài khoản?</div>
                            <Link to="/login" className="text-wrapper-7">Đăng nhập</Link>
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
}
