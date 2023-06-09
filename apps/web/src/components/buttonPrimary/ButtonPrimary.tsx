import React from "react";
import { Link } from "react-router-dom";
import styles from './ButtonPrimary.module.css';

interface props {
    type?: 'submit' | 'reset' | 'button';
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
    to: string
}

const ButtonPrimary: React.FC<props> = (props) => {

    return (
        <Link to={props.to}>
            <button 
                className={styles.botton}
                type={props.type || "button"}
                onClick={props.onClick}
                
            >
            {props.children}  
            </button>
        </Link>
    )
}


export default ButtonPrimary