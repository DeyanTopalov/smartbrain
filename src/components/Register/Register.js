import React from 'react';

const Register = ({ onRouteChange }) => {
    return (
        <article className="br3 ba white white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"> {/* Card template */}
            <main className="pa4 white">  
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0 white">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f4" htmlFor="Name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="Text" name="Name"  id="Name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                        onClick={() => onRouteChange('home')}
                        className="b ph3 pv2 input-reset ba white bg-transparent grow pointer f4 dib" 
                        type="submit" 
                        value="Register"
                    />
                    </div>
                </div>
            </main>
        </article>
    

    );
}

export default Register;