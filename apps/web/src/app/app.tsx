// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import Header from "../components/header/Header";
import Sidebar from '../components/sidebar/Sidebar';
import MainContainer from '../components/mainContainer/MainContainer';
import MobileNavigation from '../components/mobileNavigation/MobileNavigation';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <MainContainer />
      </div>
      <MobileNavigation />
    </div>
  );
}

export default App;
