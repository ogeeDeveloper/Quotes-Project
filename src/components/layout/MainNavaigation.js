import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Navigation</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/quotes">All Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/add-quote">New Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
