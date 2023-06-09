import React from "react";
import ButtonPrimary from "../buttonPrimary/ButtonPrimary";
import styles from './Header.module.css';
import { Link } from "react-router-dom";

const Header: React.FC = () => {

    return(
        <div className={styles.container}>
            <Link className={styles.headerTitle} to={'/'}>
                <h1>Monitoring</h1>
            </Link>
            <div className={styles.headerButtons}>
                <ButtonPrimary 
                    to="/new-page"
                    type="button"
                    onClick={()=>{}}
                >
                    Add New Page
                </ButtonPrimary>

                <ButtonPrimary 
                    to="/"
                    type="button"
                    onClick={()=>{}}
                >
                    Dashboard
                </ButtonPrimary>

                
            </div>
        </div>
    )
}

export default Header;