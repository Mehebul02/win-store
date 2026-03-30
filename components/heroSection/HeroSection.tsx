/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ChevronRight } from 'lucide-react';
import { bg_banner } from '@/assets';
interface Product {
  id: number;
  title: string;
  description: string;
  image: any;
  discount?: string;
  buttonText?: string;
}

const HeroSection = () => {
  const products: Product[] = [
    {
      id: 1,
      title: 'Shop Computer',
      description:
        'You Cannot Inspect Quality Into The Product. It Is Already There. I Am Not A Product Of My Circumstances, I Am A Product Of My Decisions.',
      image: bg_banner,
      discount: '40% Off',
      buttonText: 'View More',
    },
    {
      id: 2,
      title: 'Premium Headphones',
      description:
        'Experience crystal clear sound quality with our premium collection of wireless headphones.',
      image: bg_banner,
      discount: '35% Off',
      buttonText: 'View More',
    },
    {
      id: 3,
      title: 'Tech Accessories',
      description:
        'Discover the perfect accessories to enhance your digital lifestyle and productivity.',
      image: bg_banner,
      discount: '50% Off',
      buttonText: 'View More',
    },
  
  ];

  return (
    <div className="w-full h-[300px] md:h-[700px] lg:h-[332px] relative ">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full "
      >
      
          {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="h-full w-full  flex flex-col lg:flex-row items-center justify-between px-10 md:px-16 lg:px-20 lg:bg-cover bg-bottom lg:bg-center relative "
              style={{ backgroundImage: `url(${product.image.src })` }}
            >
              {/* Left Content */}
              <div className="w-full lg:w-1/2 z-10 text-center lg:text-left mt-10 lg:mt-0 lg:px-12 py-3">
                <h1 className="text-3xl md:text-5xl font-normal text-gray-900 mb-4">
                  <span className="text-gray-800">{product.title.split(' ')[0]} </span>
                  <span className="text-cyan-500">
                    {product.title.split(' ').slice(1).join(' ')}
                  </span>
                </h1>

                <p className="text-black font-medium text-sm md:text-base mb-6 leading-relaxed max-w-md line-clamp-3 mx-auto lg:mx-0">
                  {product.description}
                </p>

                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 md:px-8 py-3 rounded-md font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg">
                  {product.buttonText}
                  <ChevronRight size={20} />
                </button>
              </div>

              {product.discount && (
                <div className="hidden lg:flex w-1/2 justify-center items-center relative">
                  <div className="absolute -top-32 right-28 bg-orange-400 text-white rounded-full w-24 h-24 flex  items-center justify-center font-semibold text-lg md:text-xl shadow-lg">
                    {product.discount}
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
     
      </Swiper>
    </div>
  );
};

export default HeroSection;