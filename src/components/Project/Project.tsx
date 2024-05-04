import style from './project.module.scss'
import 'swiper/css'
import 'swiper/css/scrollbar'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Scrollbar} from 'swiper/modules'
export const Project = () => {
  return (
    <div id="project" className={style.project}>
      <div className="flex-col w-full pt-20 max-w-[1400px] m-auto flex  justify-center items-center">
        <h2 className=" mb-6 text-4xl font-medium">Мои проекты</h2>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper h-[620px] w-[98%] mx-3 "
        >
          <SwiperSlide className=" rounded-md  mr-4 bg-[#333] !h-[97%]">Slide 1</SwiperSlide>
          <SwiperSlide className=" rounded-md mr-4 bg-[#333] !h-[97%]">Slide 2</SwiperSlide>
          <SwiperSlide className=" rounded-md mr-4 bg-[#333] !h-[97%]">Slide 3</SwiperSlide>
          <SwiperSlide className=" rounded-md mr-4 bg-[#333] !h-[97%]">Slide 4</SwiperSlide>
          <SwiperSlide className=" rounded-md mr-4 bg-[#333] !h-[97%]">Slide 5</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
