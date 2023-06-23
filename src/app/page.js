import styles from "./page.module.css";

import PersonalInfo from "@/components/personalinfo/PersonalInfo";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <main className={styles.main}>
      <PersonalInfo className='personal_info' />
      <Portfolio />
    </main>
  );
}
