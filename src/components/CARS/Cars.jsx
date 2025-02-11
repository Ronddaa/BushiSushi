import { Link } from 'react-router-dom'
import styles from './Cars.module.css'

export default function Cars() {
    return (
      <section className={styles.sectionCars}>
        <div className="container">
          <ul className={styles.carsList}>
            <li className={styles.carChoise}>
              <Link to="/Citroen">Citroen</Link>
            </li>
            <li className={styles.carChoise}>
              <Link to="/CitroenXR">CitroenXR</Link>
            </li>
            <li className={styles.carChoise}>
              <Link to="/Pegout">Pegout</Link>
            </li>
            <li className={styles.carChoise}>
              <Link to="/Toyota">Toyota</Link>
            </li>
            <li className={styles.carChoise}>
              <Link to="/Rent">Аренда</Link>
            </li>
          </ul>
        </div>
      </section>
    );
}