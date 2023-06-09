import React from 'react';
import { Link } from 'react-router-dom';
import { dummy_data } from "../../store/data";

import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {

  return (
    <section className={styles.dashbordContainer}>

      <div className={styles.container}>
        <div className={styles.dashbordItems}>
          <h3>Up</h3>
          <p className={styles.up}>2</p>
        </div>
        <div className={styles.dashbordItems}>
          <h3>Down</h3>
          <p className={styles.down}>0</p>
        </div>
        <div className={styles.dashbordItems}>
          <h3>Maintenance</h3>
          <p className={styles.maintenance}>0</p>
        </div>
      </div>

        <hr/>

      <div className={styles.statusContainer}>
        <ul>
          <div className={styles.statusTitle}>
            <h3>Name</h3> 
            <h3>Status</h3> 
            <h3>Date</h3> 
          </div>
          {dummy_data.map((el) => (
            <div  className={styles.statusItems} key={el.id}>
              <div>
                <Link to={el.name}>
                  {el.name}
                </Link>
              </div>
              <div><p>{el.status}</p></div>
              <div><p>{el.date}</p></div>
            </div>
          ))}
        </ul>
      </div>

    </section>
  );
};

export default Dashboard;
