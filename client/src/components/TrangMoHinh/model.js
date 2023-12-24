import React, { Component } from 'react';
import TrangMoHinh from './TrangMoHinh.tsx';
export const ModelPage = () =>  
{
  render() 
  {
    return (
       <div style={{ width: '100vw', height: '100vh' }}>
        <h1>Trang Mô Hình</h1>
        <TrangMoHinh />
      </div>
    );
  }
}
