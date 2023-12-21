import React from "react";
import "./style.css";

export const Login = () => {
    return (
        <div className="index">
            <div className="div-3">
                <div className="div-register-one">
                    <div className="paragraph-register">
                        <p className="p">Bạn không có tài khoản?</p>
                        <div className="text-wrapper-6">Đăng kí</div>
                    </div>
                    <div className="div-row">
                        <div className="input">
                            <p className="text-wrapper-7">Nhập email hoặc số điện thoại</p>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <img
                                    className="svg"
                                    alt="Svg"
                                    src="https://cdn.animaapp.com/projects/657ecf1a93a8de6fa0640ee5/releases/657fc22981125ce7e4ea76ca/img/svg.svg"
                                />
                                <div className="div-wrapper">
                                    <div className="text-wrapper-7">Mật khẩu</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-wrapper-8">Quên mật khẩu?</div>
                        <div className="button-thm-btn">
                            <div className="overlap-2">
                                <div className="div-4" />
                                <div className="div-5" />
                                <div className="span-2">
                                    <div className="overlap-group-3">
                                        <img
                                            className="svg-2"
                                            alt="Svg"
                                            src="https://cdn.animaapp.com/projects/657ecf1a93a8de6fa0640ee5/releases/657fc22981125ce7e4ea76ca/img/svg-1.svg"
                                        />
                                        <div className="text-wrapper-9">Đăng nhập</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paragraph-register-2">
                        <p className="text-wrapper-10">chỉ bằng một nút bấm</p>
                        <p className="text-wrapper-11">Hãy đăng nhập để có cơ hội khám phá Lăng Bác</p>
                    </div>
                    <div className="text-wrapper-12">Đăng nhập</div>
                </div>
            </div>
        </div>
    );
};
