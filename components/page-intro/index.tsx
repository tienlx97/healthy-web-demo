import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-1.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Bạn là cuộc sống và tâm hồn của tôi</h2>
                <a href="#" className="btn-shop">
                  <i className="icon-right"></i>Mua tại đây
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Mea vita et anima es</h2>
                <a href="#" className="btn-shop">
                  <i className="icon-right"></i>Mua tại đây
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Chất lượng</h4>
                {/* <p>On purchases over $199</p> */}
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Đạo đức</h4>
                {/* <p>Our clients' opinions speak for themselves</p> */}
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Bền vững</h4>
                {/* <p>30 days warranty for each product from our store</p> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
