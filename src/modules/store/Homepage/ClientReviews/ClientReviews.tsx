import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";

const ClientReviews = () => (
  <section className="feedback section">
    <div className="feedback_container container">
      <h2 className="section_title">What your client says</h2>

      <div className="feedback_content">
        <Swiper
          loop={true}
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
        >
          <SwiperSlide className="feedback_item">
            <div className="feedback_user">
              <div className="user_image">
                <img
                  src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655088718/final/user-1_ncq5jj.jpg"
                  alt=""
                />
              </div>
              <div className="user_infor">
                <p className="name">john doe</p>
                <p className="job">design</p>
              </div>
            </div>
            <div className="feedback_content">
              <div className="star">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bx-star" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa distinctio
                hic recusandae vero"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback_item">
            <div className="feedback_user">
              <div className="user_image">
                <img
                  src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655088719/final/user-4_esszix.jpg"
                  alt=""
                />
              </div>
              <div className="user_infor">
                <p className="name">john doe</p>
                <p className="job">design</p>
              </div>
            </div>
            <div className="feedback_content">
              <div className="star">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bx-star" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa distinctio
                hic recusandae vero"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback_item">
            <div className="feedback_user">
              <div className="user_image">
                <img
                  src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655088719/final/user-2_mowghg.jpg"
                  alt=""
                />
              </div>
              <div className="user_infor">
                <p className="name">john doe</p>
                <p className="job">design</p>
              </div>
            </div>
            <div className="feedback_content">
              <div className="star">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bx-star" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa distinctio
                hic recusandae vero"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback_item">
            <div className="feedback_user">
              <div className="user_image">
                <img
                  src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655088719/final/user-3_qckcrh.jpg"
                  alt=""
                />
              </div>
              <div className="user_infor">
                <p className="name">john doe</p>
                <p className="job">design</p>
              </div>
            </div>
            <div className="feedback_content">
              <div className="star">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bx-star" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa distinctio
                hic recusandae vero"
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
);

export default ClientReviews;
