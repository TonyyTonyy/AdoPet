import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar'
import Carrosel from '../../components/Carrossel';
import SessionPet from '../../components/SessionPet';
import Cachorro from '../../assets/Cachorro.svg'
import Gato from '../../assets/Gato.svg'
import styles from './style.module.css'
import CardPet from '../../components/CardPet';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);  
    }, []);

    if (isLoading) {
        return ( 
        <span className={styles.tela}>
                 <span className={styles.loader}></span>
        </span>
        )
    }

    return (
        <>
            <Navbar/>
            <Carrosel/>
            <div className={`container-fluid d-flex align-items-center justify-content-center`}>
                <div className={`row gap-3`}>
                    <div className={`col-12 col-md-6`}>
                        <SessionPet animal='Cachorros' img={Cachorro}/>
                    </div>
                    <div className={`col-12 col-md-5`}>
                        <SessionPet animal='Gatos' img={Gato}/>
                    </div>
                </div>
            
               </div>


        <div>

            <div>

                <div>
                    <CardPet/>
                </div>
                    
            </div>
            
        </div>

        </>
    );
}

export default Home;
