import React from 'react';
import web from "../images/home.jpg"
import Common from './Common';
const Home = () => {
    return (
        <>
            <Common
            name="Grow your business with"
            imgsrc={web}
            visit="/service"
            btname="Get Started"
            />
        </>
    );
}
export default Home;