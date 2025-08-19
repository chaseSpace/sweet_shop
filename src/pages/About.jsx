
import { motion } from 'framer-motion';
import { Heart, Store } from 'lucide-react';
import React from 'react';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <div className="flex-grow max-w-6xl mx-auto px-4 py-12">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-amber-900 mb-4">关于我们</h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            传承百年工艺，用心制作每一碗糖水
          </p>
        </motion.div>

        {/* 品牌故事 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <Heart className="text-amber-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-amber-900">品牌故事</h2>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-lg text-amber-800 mb-4">
              甜蜜糖水铺始于1920年，由祖辈传承至今已有百年历史。我们始终坚持手工制作，选用优质食材，传承古法工艺，为每一位顾客带来最纯正的糖水体验。
            </p>
            <p className="text-lg text-amber-800 mb-4">
              每一碗糖水都承载着我们对传统美食文化的热爱与坚持。从选料到制作，每一步都严格把控，只为呈现最完美的口感和最温暖的甜蜜。
            </p>
            <p className="text-lg text-amber-800">
              我们不仅是在制作糖水，更是在传递一种温暖、悠闲的生活方式，让每一位顾客都能在这里找到属于自己的甜蜜时光。
            </p>
          </div>
        </motion.section>

        {/* 店铺环境 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <Store className="text-amber-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-amber-900">店铺环境</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-80 bg-gray-200 border-2 border-dashed rounded-t-xl w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-amber-900">温馨堂食区</h3>
                <p className="text-amber-700">舒适座椅，温暖灯光，享受悠闲时光</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-80 bg-gray-200 border-2 border-dashed rounded-t-xl w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-amber-900">透明制作区</h3>
                <p className="text-amber-700">现场制作，干净卫生，看得见的放心</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
