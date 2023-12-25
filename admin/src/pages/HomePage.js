// src/pages/HomePage.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const HomePage = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className="container mx-auto mt-8 p-10 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Chào mừng bạn đến với trang Admin Khám Phá Lăng Bác</h1>
      <p className="text-lg text-gray-600">
        Xin chào! Đây là trang quản trị của chúng tôi, nơi bạn có thể quản lý các thông tin liên quan đến Lăng Bác.
        Hãy sử dụng thanh điều hướng ở trên để truy cập các chức năng khác nhau của trang web.
      </p>
    </animated.div>
  );
};

export default HomePage;
