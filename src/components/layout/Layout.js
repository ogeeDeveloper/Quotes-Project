import styles from "./Layout.module.css";
import MainNavigation from "./MainNavaigation";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
