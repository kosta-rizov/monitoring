import React, { useState } from "react";
import { Link } from "react-router-dom";

import {dummy_data } from '../../store/data';

import styles from './Sidebar.module.css';

const Sidebar:React.FC = () => {

    const [search, setSearch] = useState("");

    const listOfNames = dummy_data.filter((el) => {
        if(search === '') {
            return el
        } else if(el.name.toLowerCase().includes(search.toLowerCase())){
            return el
        }
    }).map((el) => {
        return (
            <Link key={el.id} to={el.name} className={styles.listItems}>
                <span>100%</span>
                <li>{el.name}</li>
            </Link>
        )
    })

    return(
        <aside className={styles.container}>
            
            <input 
                type="text" 
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}    
            />

            <hr/>
            
            <ul className={styles.listItemsContainer}>
                {listOfNames}
            </ul>

        </aside>
    )
}

export default Sidebar