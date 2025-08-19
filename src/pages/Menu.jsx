
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
const Menu = () => {
  // 完整菜单数据
  const menuItems = [
    {
      category: "经典汤圆系列",
      items: [
        {
          id: 1,
          name: "红糖汤圆",
          description: "传统手工制作，老红糖熬制，温暖滋补",
          image: "/menu/classic/1-红糖汤圆.jpg"
        },
        {
          id: 2,
          name: "椰奶汤圆",
          description: "椰香浓郁，口感丝滑，夏日必备",
          image: "/menu/classic/2-椰奶汤圆.jpg"
        },
        {
          id: 3,
          name: "酒酿汤圆",
          description: "传统发酵酒酿，香甜可口，营养丰富",
          image: "/menu/classic/3-酒酿汤圆.jpg"
        },
        {
          id: 4,
          name: "红豆沙汤圆",
          description: "细腻红豆沙，甜而不腻，经典之选",
          image: "/menu/classic/4-红豆沙汤圆.jpg"
        }
      ]
    },
    {
      category: "创新口味系列",
      items: [
        {
          id: 5,
          name: "芝麻汤圆",
          description: "黑芝麻研磨，香浓可口，营养丰富",
          image: "/menu/innovative/5-芝麻汤圆.jpg"
        },
        {
          id: 6,
          name: "花生汤圆",
          description: "香脆花生碎，口感丰富，回味无穷",
          image: "/menu/innovative/6-花生汤圆.jpg"
        },
        {
          id: 7,
          name: "紫薯汤圆",
          description: "天然紫薯，健康美味，颜值与口感并存",
          image: "/menu/innovative/7-紫薯汤圆.jpg"
        },
        {
          id: 8,
          name: "抹茶汤圆",
          description: "日式抹茶，清香淡雅，别具一格",
          image: "/menu/innovative/8-抹茶汤圆.jpg"
        }
      ]
    },
    {
      category: "养生系列",
      items: [
        {
          id: 9,
          name: "银耳莲子汤",
          description: "滋阴润燥，美容养颜，女士最爱",
          image: "/menu/health/9-银耳莲子汤.jpg"
        },
        {
          id: 10,
          name: "红枣桂圆汤",
          description: "补气养血，温暖身心，冬日必备",
          image: "/menu/health/10-红枣桂圆汤.jpg"
        },
        {
          id: 11,
          name: "百合雪梨汤",
          description: "清热润肺，止咳化痰，秋季佳品",
          image: "/menu/health/11-百合雪梨汤.jpg"
        }
      ]
    }
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <div className="flex-grow max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-amber-900 mb-4">完整菜单</h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            精选优质食材，传统工艺与现代创新的完美结合，每一口都是甜蜜的享受
          </p>
        </motion.div>

        {menuItems.map((category, categoryIndex) => (
          <motion.section
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-amber-900 mb-6 pb-2 border-b-2 border-amber-200">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full mx-auto object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-amber-900 mb-2">{item.name}</h3>
                    <p className="text-amber-700 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Menu;
