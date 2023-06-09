import React from "react";
import { Route, Routes } from 'react-router-dom';

//components
import NewPageForm from "../newPageForm/NewPageForm";
import Dashboard from "../dashboard/Dashboard";
import ListOfPages from "../listOfPages/ListOfPages";

import styles from './MainContainer.module.css';


const MainContainer: React.FC = () => {

    return(
        <main className={styles.container}>

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/new-page" element={<NewPageForm />}/>
                <Route path="/list" element={<ListOfPages/>}/>
            </Routes>

        </main>
    )
}

export default MainContainer;