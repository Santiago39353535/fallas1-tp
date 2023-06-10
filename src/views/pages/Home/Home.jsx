import React from 'react';
import { Paper } from '@mui/material';
import './Home.css';
import Image from '../../../assets/images/triumph-1920x1080.jpg';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat'
    }
};

const Home = () => {
    return (
        <Paper style={styles.paperContainer}>
            <div className='section-intro'>
                <div className='section-intro-title'>
                    El futuro de la movilidad
                </div>
            </div>
        </ Paper>
    )
}


export default Home;
