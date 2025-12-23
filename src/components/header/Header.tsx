import { Monitor } from "lucide-react"
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.divMonitor}>
        <Monitor /> Monitor Service
      </div>
  )
}
