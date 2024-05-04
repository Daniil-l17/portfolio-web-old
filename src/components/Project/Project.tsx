import style from './project.module.scss'
import 'swiper/css'
import 'swiper/css/scrollbar'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Scrollbar} from 'swiper/modules'
import {useQuery} from '@tanstack/react-query'
import {axiosProject} from '../../config/axios'
import {Project as IProject} from '../../types/Project'
import {useInView} from 'react-intersection-observer'
import {Loading} from '../Loading/Loading'
export const Project = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const {data, isLoading} = useQuery({
    queryKey: ['project'],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const data = (await axiosProject.get<IProject[]>('project')).data
      return data
    },
    enabled: inView,
  })

  return (
    <div ref={ref} id="project" className={style.project}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex-col w-full pt-20 max-w-[1600px] m-auto flex  justify-center items-center">
          <h2 className=" mb-6 text-4xl font-medium">Мои проекты</h2>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper w-[98%] acaa mx-3 "
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index} className=" rounded-md  mr-4 bg-[#333] ">
                <a
                  className=" block rounded-md max-[600px]:h-[230px] h-[530px] w-full"
                  href={item.deploy}
                  target="_blank"
                >
                  <div
                    style={{backgroundImage: `url(${item['img']})`}}
                    className=" cursor-pointer max-[440px]:bg-center rounded-md  h-full w-full bg-cover bg-no-repeat"
                  ></div>
                </a>
                <div className="py-2 px-4 ">
                  <div className="flex justify-between items-center">
                    <h2 className=" uppercase text-base">{item['title']}</h2>
                    <h2 className=" mr-3 text-lg cursor-pointer">
                      <a
                        href={item.linkGitHub}
                        target="_blank"
                        className="text-current no-underline"
                      >
                        GitHub
                      </a>
                    </h2>
                  </div>
                  <p className="text-[#7d7c7e]">{item['description']}</p>
                  <div className=" mb-4 mt-2">
                    <h2 className=" text-lg">Функионал - </h2>
                    <div className="flex flex-wrap items-center gap-4">
                      {item['function'].map((el, index) => (
                        <p key={index} className="text-[#7d7c7e]">
                          {el}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  )
}
