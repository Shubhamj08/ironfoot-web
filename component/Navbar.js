import React from 'react'
import styles from '../scss/navbar.module.scss'
import Link from 'next/link'

function Navbar() {
  return (
    <div className={styles.backGroundColor}>
      <div className={styles.mainContainer} >
        <div className={styles.container}>
          <div className={styles.div1}>
            {/* <Link href="/" ></Link> */}
            <h4 className={styles.logo}>IronFoot</h4>
          </div>
          <div className={styles.div2} >
            <Link href="/"><p>Home</p>
            </Link>
            <Link href="/services"><p>Service</p>
            </Link>
            <Link href="/about-us"><p>About Us</p>
            </Link>

          </div>
          <div className={styles.div3}>
            <button>Get Your Expert</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar