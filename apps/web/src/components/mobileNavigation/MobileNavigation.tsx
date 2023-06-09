import React from "react";
import styles from './MobileNavigation.module.css';
import { Link } from "react-router-dom";
import ButtonPrimary from "../buttonPrimary/ButtonPrimary";

const MobileNavigation: React.FC = () => {

    return (
        <nav className={styles.container}>
            <Link className={styles.linkitems} to={"/list"}>
                <p>List</p>
            </Link>
            <Link className={styles.linkitems} to={"/"}>
                <p>Dashbord</p>
            </Link>
            <Link className={styles.linkitems} to={"/new-page"}>
                <p>Add</p>
            </Link>
        </nav>
    )
}

export default MobileNavigation;