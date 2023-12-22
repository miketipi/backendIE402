import React from "react";
import "./style.css";

export const RegisterForm = () => {
    return (
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
                        <input type="checkbox" name="agree" />
                    </div>
                    <div className="div-row">
                        <button className="button-thm-btn">
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
                            <input className="input" placeholder="Mật khẩu" />
                        </div>
                        <div className="div-wrapper">
                            <input className="input" placeholder="Email" />
                        </div>
                        <input className=" input-2" placeholder="Tên" />
                        <input className=" input-3" placeholder="Họ" />
                    </div>
                    <div className="paragraph-register-2">
                        <div className="text-wrapper-11">khamphalangbac.com</div>
                        <p className="p">Đăng ký để trở thành thành viên của website</p>
                    </div>
                    <div className="text-wrapper-12">Đăng ký</div>
                </div>
            </div>
        </div >
    );
};
