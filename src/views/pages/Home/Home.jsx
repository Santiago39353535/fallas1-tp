import React from 'react';
import { useEffect } from 'react';
import { useParallax, useParallaxController, Parallax } from 'react-scroll-parallax';
import './Home.css';

const Home = () => {
    const parallaxController = useParallaxController();

    useEffect(() => {
        parallaxController.update();
    }, []);
    return (
        <>
            <div>home</div>
            {/* panel introduccion */}
            {/* <div className='section-intro'>
                <Parallax speed={10}>
                    <div className='section-intro-title'>
                        WeBadge
                    </div>
                    <div className='section-intro-sub-title'>
                        Treasuring your successes
                    </div>
                </Parallax>
            </div> */}
            {/* cual es nuestro producto */}
            {/* <div className='section-product'>
                <Parallax scale={[1,1.3]} className='section-product-title'>
                    Our Product
                </Parallax >
                <div className='section-product-sub-title'>
                    We offer you an oportunity
                    <br />
                    to
                    <br />
                    Make yourself <span className='highlightText'>KNOWN</span> through alternative means
                </div>
            </div>
            <div className='section-product-title'>
                How do we do it?
            </div>
            <div className='section-product-sub-title'>
                We use our badges to take advantage of the word of mouth to advertise your business
            </div> */}
            {/* clientes */}
        </>
    )
}

export default Home;