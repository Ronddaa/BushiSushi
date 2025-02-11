import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'

export default function MainPage() {
    return (
        <main className={styles.mainWrapper}>
            <section>
                <div className="container">
                    <ul className={styles.divisionList}>
                        <li className={styles.division}>
                            <Link to="/bushicars">Машины</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}