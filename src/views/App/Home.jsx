import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FilmCard from "@/components/App/FilmCard";
const Home = () => {
  return (
    <section className="flex items-center justify-between p-10 w-full">
      <div className="w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-medium">🎥 All Movies</h1>
          <div className="w-full mt-5">
            <Swiper
              className="w-full"
              spaceBetween={50}
              slidesPerView={3}
              loop={true}
            >
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10">
          <h1 className="text-2xl font-medium">🫶 Favorite Series</h1>
          <div className="w-full mt-5">
            <Swiper
              className="w-full"
              spaceBetween={50}
              slidesPerView={3}
              loop={true}
            >
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
