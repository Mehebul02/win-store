/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Container from "../shared/Container";
import { appliances, babies, electronics, fashion } from "@/assets";

interface CategoryProps {
  categories: {
    id: number;
    name: string;
  }[];
}
const categoriesImage = [
  { id: 1, image: electronics },
  { id: 2, image: fashion },
  { id: 3, image: appliances },
  { id: 4, image: babies },
]
const Category = ({ categories }: CategoryProps) => {

  return (
    <div className="relative w-full px-10 py-6 bg-gradient-to-b from-[#F3EDC9] to-white/0">
      <Container>
        <div className="custom-prev absolute left-1 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-4">
          <SlArrowLeft className="text-[#1b1a1a] text-4xl font-normal" />
        </div>

        <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer px-4">
          <SlArrowRight className="text-[#1b1a1a] text-4xl font-normal" />
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          slidesPerGroup={2}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1.2, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 2 },
          }}
        >
          {categories?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative group rounded-md shadow-sm">
                  <Image
                    src={categoriesImage.find((cat) => cat.id === item.id)?.image as any}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                <div className="absolute bottom-3 -left-2 right-3 bg-white/95 flex items-center justify-between px-3 py-2 shadow">
                  <span className="text-sm font-medium text-black capitalize">
                    {item.name}
                  </span>
                  <button className="text-[#14B1F0] text-sm font-medium hover:underline">
                    Shop
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="border-2 mt-2"></div>
      </Container>
    </div>
  );
};

export default Category;