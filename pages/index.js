import Image from "next/image";
import styles from "../scss/page.module.scss";
import Layout from "../component/Layout";
import home from "../src/home.svg";
import json from "../json/page.json";
// import section3img from "../src/section3/1.svg";
import doubleQuotes from "../src/doublequoteswhite.svg";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper'
const basePath = "../public/section3"

export default function Home(props) {
  return (
    <>
      <Layout>
        {/* section 1 */}

        <div className={styles.section1MainContainer}>
          <div className={styles.mainContainer}>
            <div className={styles.container}>
              <div className={styles.content}>
                <h1 className={styles.heading}>
                  {json.homepage.section1.heading}
                </h1>
                <h2 className={styles.subheading}>
                  {json.homepage.section1.subheading}
                </h2>

                <div className={styles.buttonDiv}>
                  <button className={styles.button}>
                    {json.homepage.section1.cta}
                  </button>
                </div>
              </div>

              <div className={styles.image}>
                <Image src={home} objectFit="contain" layout="fill" />
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div></div>

        {/* section 3 */}
        <div className={styles.section3MainContainer}>
          <div className={styles.mainContainer}>
            <h2 className={styles.heading}>{json.homepage.section3.heading}</h2>
            <h3 className={styles.subheading}>
              {json.homepage.section3.subheading}
            </h3>

            <div className={styles.cardContainer}>
              {json.homepage.section3.array.map((data, index) => {
                return (
                  <div className={styles.card} key={index}>
                    <div className={styles.number}>
                      <p>{index + 1}</p>
                    </div>

                    <div className={styles.image}>
                      <Image
                        src={`${data.image}`}
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>

                    <p>{data.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* section 4 */}
        <div className={styles.section4MainContainer}>
          <div className={styles.mainContainer}>
            <h2 className={styles.heading}>{json.homepage.section4.heading}</h2>

            <div className={styles.cardContainer}>
              <Swiper
                // modules={[Navigation]} 
                className="mySwiper"
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                slidesPerGroup={1}
                slidesPerView={"auto"}
              >
                {json.homepage.section4.array.map((data, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={styles.card}>
                        <div className={styles.image}>
                          <Image
                            src={doubleQuotes}
                            objectFit="contain"
                            layout="fill"
                          />
                        </div>

                        <p className={styles.para}>{data.desc}</p>
                        <h4 className={styles.name}>{data.name}</h4>
                        <p className={styles.service}>{data.service}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
