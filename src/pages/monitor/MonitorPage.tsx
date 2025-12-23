import { Header } from "../../components/header/Header"
import { MonitorCard } from "../../components/monitor-card/MonitorCard"
import styles from "./MonitorPage.module.css"


export const MonitorPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div>Overview: 8 ativos | 2 inativos | 10 total</div>
      <main>
        <MonitorCard />
      </main>
    </div>
  )
}
