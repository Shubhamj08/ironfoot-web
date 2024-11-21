import React from "react";
import Image from "next/image";
import styles from "../../scss/aboutus.module.scss";
import Layout from "../../component/Layout";
import json from "../../json/page.json";

function Index(props) {
  return (
   <>
    <Layout>

        {/* section1 */}
        <div className={styles.section1MaxWidth} >
          <div className={styles.mainContainer}>
            <h1 className={styles.heading}>{json.about.section1.heading}</h1>
            <div className={styles.container}>
              <div className={styles.colorContainer}>
                <p className={styles.text}>{json.about.section1.description}</p>
              </div>

              <div className={styles.imageContainer}>

              </div>
            </div>
          </div>
        </div>

        {/* section2 */}
        <div className={styles.section2MaxWidth}>
          <div className={styles.mainContainer}>
            <h2 className={styles.heading}>{json.about.section2.heading}</h2>

          <div className={styles.container}>
            <div className={styles.left}>
              <p className={styles.text}>{json.about.section2.description}</p>
            </div>

            <div className={styles.right}>
              <Image 
                src={json.about.section2.image}
                objectFit="contain"
                layout="fill"
              />
            </div>
          </div>
          
        </div>
        </div>

        {/* section 3 */}
        <div className={styles.section3MaxWidth}>
          <div className={styles.mainContainer}>
            <h2 className={styles.heading}>{json.about.section3.heading}</h2>

          <div className={styles.container}>
            <p>{json.about.section3.description}</p>
            <div className={styles.image}>
              <Image 
                src={json.about.section3.image}
                objectFit="contain"
                layout="fill"
              />
            </div>
            <p>{json.about.section3.para}</p>
          </div>
        </div>
        </div>

        {/* section 4 */}
        <div className={styles.section4MaxWidth}>
          <div className={styles.mainContainer}>
            <h2 className={styles.heading}>{json.about.section4.heading}</h2>

            <div className={styles.image}>
              <Image
                src={json.about.section4.image}
                objectFit="contain"
                layout="fill"
              />
            </div>

            <div className={styles.cardmainContainer}>
              <h3 className={styles.subheading}>{json.about.section4.subheading}</h3>
              <div className={styles.container}>
                {json.about.section4.array.map((data, i) => {
                  return (
                    <div className={styles.cardMain}>
                      <div className={styles.card} key={i}>
                        <div className={styles.image}>
                          {/* <Image
                            src={json.about.section4.image2}
                            height="176px"
                            width="176px"
                          /> */}
                        </div>

                        <div className={styles.content}>
                          <h4>{data.name}</h4>
                          <p>{data.title}</p>
                        </div>
                      </div>

                      <div className={styles.cardDescription}>
                          <p>{data.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>

    </Layout>
  </>

  )
}

export default Index;

export async function getStaticProps() {
  return {
    props: {},
  };
}
