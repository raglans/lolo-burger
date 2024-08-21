import styles from "./page.module.css";
import Image from 'next/image';
import Burger from '../../public/images/burger.jpg';
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.center} ${styles.our_approach}`}>
          <h3 className={`${styles.subtitle} ${dancing_script.className}`} style={{margin: '0', marginTop: '5%'}}>Happy 7th Anniversary</h3>
          <h1 className={styles.title}>LoLo® Burger</h1>
        <div className={`${styles.center} ${styles.our_approach}`}>
          <Image style={{width: '50%', height: '50%'}} src={Burger} />
          <p style={{margin: '7% 20% 7% 20%'}}>
            Our signature burger was created in 2017 under our moniker celebrating local creativity & small business independence.
          </p>
          <a className={styles.button} href="https://www.raglans.ca/">Order Now</a>
        </div>
      </div>
    </main>
  );
}
