import React from "react";

//turning into Smart component
class Signin extends React.Component {
  constructor(props) {
    super();
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }
  onEmailChange = (event) => {
    //creating on change event that will capture the info onchange from email
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    //creating on change event that will capture the info onchange from email
    this.setState({ signInPassword: event.target.value });
  };
  onSubmitSignIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      //by default Fetch uses GET request, here we specify it is POSt
      headers: {
        "Content-Type": "application/json",
      },
      // we specify that this is in JSON and we need to run stringify
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //if the data is valided by the server and we get 'success' - coded as res in the server
        if (data === "success") {
          this.props.onRouteChange("home"); //navigates to home screen
        }
      });
  };

  render() {
    // passing props
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba white white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        {" "}
        {/* Card template */}
        <main className="pa4 white">
          {" "}
          {/* Form Template */}
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f4" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange} //onChange event for email
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f4" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange} //onChange event for pass
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba white bg-transparent grow pointer f4 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f1 link dim white db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
