import React from "react";
import Image from "next/image";
import styles from "../../scss/service.module.scss";
import Layout from "../../component/Layout";
import json from "../../json/page.json";

import questionmark from "../../src/questionmark.svg"

function Index(props) {
  return (
   <>
    <Layout>

        {/* section1 */}
        <div className={styles.section1MaxWidth}>
            <div className={styles.container}>
                {json.services.section1.array.map((data, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <div className={styles.image}>
                                <Image src={data.image} objectFit="contain" layout="fill" alt={data.name} />
                            </div>
                            <p>{data.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>

        {/* section 2 */}
        <div className={styles.section2MaxWidth}>
            <div className={styles.container}>
                <h1 className={styles.heading}>{json.services.section2.heading}</h1>

                <div className={styles.content}>
                    <div className={styles.left}>
                    
                    {json.services.section2.array.map((data, index) => {
                        return (
                            <div className={styles.faqContainer} key={index}>
                                <div className={styles.number} >
                                    <p>{index + 1}</p>
                                </div>
                                <div className={styles.faq} >
                                    <h4>{data.ques}</h4>
                                    <p>{data.ans}</p>
                                </div>
                            </div>
                        )
                    })}

                    </div>

                    <div className={styles.image}>
                        <Image src={questionmark} objectFit="contain" layout="fill" />
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
