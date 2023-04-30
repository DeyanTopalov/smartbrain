import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brainLogo.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className = 'ma4 nt0 logoBox'>
            <Tilt className ='Tilt'>
                <div>
                    <img alt='logoImage' src = {brain}/>  {/* in React img needs to have alt tag with description */}
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;