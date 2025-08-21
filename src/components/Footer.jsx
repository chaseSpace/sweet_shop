import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, MessageCircle } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path.startsWith('/')) {
      navigate(path);
    } else {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="footer" className="bg-amber-900 text-amber-100 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">续甜手作糖水铺</h3>
            <p className="mb-2">地址：重庆市南岸区腾龙大道21号附142号</p>
            <p className="mb-2">营业时间：14:00 - 24:00</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('/')} className="hover:text-amber-300 transition-colors">首页</button></li>
              <li><button onClick={() => handleNavigation('menu')} className="hover:text-amber-300 transition-colors">菜单</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">关注我们</h3>
            <p className="mb-4">在社交媒体上关注我们，获取最新优惠信息</p>
            <div className="flex space-x-4">
              <a
                href="https://www.xiaohongshu.com/user/profile/654d19bd0000000002035899"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 hover:text-amber-300 transition-colors"
                aria-label="小红书"
              >
                <BookOpen className="w-6 h-6" />
              </a>
              <div className="relative group">
                <MessageCircle className="w-6 h-6 text-amber-100 hover:text-amber-300 transition-colors cursor-pointer" aria-label="微信" />
                <div className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-white rounded-lg shadow-lg z-10 flex items-center justify-center" style={{ width: '180px', height: '180px' }}>
                  <img 
                    src="/social/wechat_qrcode.jpg"
                    alt="微信二维码" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 续甜手作糖水铺. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;