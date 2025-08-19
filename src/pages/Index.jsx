
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
const Index = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('menu');
  
  // 轮播图数据
  const slides = [
    {
      id: 1,
      image: "file/banner/slide-1.jpg",
      title: "一碗匠心，一份甜蜜",
      description: "传承古法，创新口味"
    },
    {
      id: 2,
      image: "file/banner/slide-2.jpg",
      title: "精选食材，手工制作",
      description: "无添加，更健康"
    },
    {
      id: 3,
      image: "file/banner/slide-3.jpg",
      title: "温馨环境，舒适体验",
      description: "享受悠闲时光"
    }
  ];

  // 精选产品数据
  const featuredProducts = [
    {
      id: 1,
      name: "红糖汤圆",
      description: "手工搓制，暖心暖胃",
      image: "file/products/product1.jpg"
    },
    {
      id: 2,
      name: "椰奶汤圆",
      description: "椰香浓郁，口感丝滑",
      image: "file/products/product2.jpg"
    },
    {
      id: 3,
      name: "酒酿汤圆",
      description: "传统发酵，香甜可口",
      image: "file/products/product3.jpg"
    },
    {
      id: 4,
      name: "红豆沙汤圆",
      description: "细腻红豆，甜蜜滋味",
      image: "file/products/product4.jpg"
    }
  ];

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      {/* 全屏轮播图 */}
      <section className="relative min-h-screen overflow-hidden">
        {/* 左导航按钮 */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 shadow-md"
          aria-label="上一张"
        >
          <ChevronLeft className="w-10 h-10 text-white" />
        </button>
        
        {/* 右导航按钮 */}
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 shadow-md"
          aria-label="下一张"
        >
          <ChevronRight className="w-10 h-10 text-white" />
        </button>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <motion.h1 
                    className="text-4xl md:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="text-xl md:text-2xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Button 
                      size="lg" 
                      className={`text-lg px-8 py-6 ${
                        activeSection === 'menu' 
                          ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                          : 'bg-white text-amber-600 hover:bg-amber-100'
                      }`}
                      onClick={() => scrollToSection('menu')}
                    >
                      查看菜单
                    </Button>
                    <Button 
                      size="lg" 
                      className={`text-lg px-8 py-6 ${
                        activeSection === 'contact' 
                          ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                          : 'bg-white text-amber-600 hover:bg-amber-100'
                      }`}
                      onClick={() => scrollToSection('contact')}
                    >
                      联系预订
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* 轮播指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* 精选产品展示区 */}
      <section id="menu" className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">招牌糖水</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            精选优质食材，传统工艺与现代创新的完美结合
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full mx-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{product.name}</h3>
                <p className="text-amber-700">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
            onClick={() => navigate('/menu')}
          >
            更多美味
          </Button>
        </div>
      </section>

      {/* 品牌理念 */}
      <section id="about" className="py-16 bg-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">我们的故事</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-lg text-amber-800 mb-4">
                传承百年古法，坚持手工制作，是我们对传统糖水文化的致敬。
              </p>
              <p className="text-lg text-amber-800 mb-4">
                每一碗糖水都承载着匠人的心血，精选云南老红糖、优质糯米，用心熬制每一份甜蜜。
              </p>
              <p className="text-lg text-amber-800">
                我们不仅是在制作糖水，更是在传递一种温暖、悠闲的生活方式。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 店铺环境 - 新增部分 */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">店铺环境</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              舒适温馨的用餐环境，透明卫生的制作过程
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-80 overflow-hidden">
                <img 
                  src="file/env/dining.jpg" 
                  alt="温馨堂食区" 
                  className="w-full h-full mx-auto object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">温馨堂食区</h3>
                <p className="text-amber-700">
                  舒适座椅，温暖灯光，享受悠闲时光。无论是朋友小聚还是独自品味，都能在这里找到属于自己的甜蜜角落。
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-80 overflow-hidden">
                <img 
                  src="file/env/kitchen.jpg" 
                  alt="透明制作区" 
                  className="w-full h-full mx-auto object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">透明制作区</h3>
                <p className="text-amber-700">
                  现场制作，干净卫生，看得见的放心。顾客可以亲眼见证每一碗糖水的诞生过程，感受手工艺的魅力。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
