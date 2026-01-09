import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "./hero.scss";
import swiper1 from "../../assets/images/hero-swiper1.png";
import swiper2 from "../../assets/images/hero-swiper2.jpg";
import swiper3 from "../../assets/images/hero-swiper3.webp";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero container">
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="hero__swiper-img" src={swiper1} alt="Hero slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="hero__swiper-img" src={swiper2} alt="Hero slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="hero__swiper-img" src={swiper3} alt="Hero slide 3" />
        </SwiperSlide>
      </Swiper>
      <div className="hero__bottom">
        <h1>
          {t("simply_unique")}
          <span>/</span> <br />
          {t("simply_better")}
          <span>.</span>
        </h1>
        <p>
          <span>3legant</span> is a gift & decorations store based in <br />{" "}
          HCMC, Vietnam. Est since 2019.{" "}
        </p>
      </div>
    </section>
  );
};

export default memo(Hero);
