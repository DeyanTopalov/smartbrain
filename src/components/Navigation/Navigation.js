import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => { // do not forget to add isSignedIn here
        if (isSignedIn) {
            return ( // we need 1 return in each statement inside the If
                <nav style = {{
                    display: 'flex', 
                    justifyContent: 'flex-end', 
                    padding: "1rem"
                    }}>
                    <p 
                    onClick={() => onRouteChange('signout')}
                    className = 'f3 link dim white underline pa3 pointer'>
                        Sign Out</p>
                </nav> );
            } else {
            return (
             <nav style = {{
                    display: 'flex', 
                    justifyContent: 'flex-end', 
                    padding: "1rem"
                    }}>
                    <p 
                    onClick={() => onRouteChange('signin')}
                    className = 'f3 link dim white underline pa3 pointer'>
                        Sign In</p>
                    <p 
                    onClick={() => onRouteChange('register')}
                    className = 'f3 link dim white underline pa3 pointer'>
                        Register</p>
                </nav> // 1 <nav> with the 2x <p> tags as 1st is more optimal and 2nd we can return only 1 container
            );
        }
}

export default Navigation;