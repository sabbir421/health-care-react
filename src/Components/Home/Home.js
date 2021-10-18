import React from 'react';
import Bannar from '../Bannar/Bannar';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div id='home'>
           
            <Bannar></Bannar>
            <Services ></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;