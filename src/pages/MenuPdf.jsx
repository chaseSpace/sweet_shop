import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const MenuPdf = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      {/* 返回首页按钮 */}
      <div className="p-4">
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
        >
          返回首页
        </button>
      </div>

      {/* 菜单图片展示 */}
      <div className="flex flex-col items-center gap-8 p-4 flex-grow">
        <div className="w-full max-w-4xl flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-amber-800 text-center">甜品菜单</h2>
          <img 
            src="/menu/all_in_image/甜品菜单.png" 
            alt="甜品菜单" 
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="w-full max-w-4xl flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-amber-800 text-center">饮品菜单</h2>
          <img 
            src="/menu/all_in_image/饮品菜单.png" 
            alt="饮品菜单" 
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* 页脚 */}
      <Footer />
    </div>
  );
};

export default MenuPdf;