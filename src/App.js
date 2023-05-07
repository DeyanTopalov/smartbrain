import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticlesBg from 'particles-bg'
import { Component } from 'react'; //Convert to 
// import { useState } from 'react'; -> when using the Function
// import Clarifai from 'clarifai';


// function App() { // Using Function instead of Class Component
//   const [input, setInput] = useState('');


// const onInputChange = (event) => {
//   console.log(event.target.value);
// }

// const onButtonSubmit = () => {
//   console.log('click');
// }

//   return (
//     <div className="App">
//       <ParticlesBg type="cobweb" num='500' bg={true} />
//       <Navigation />
//       <Logo />
//       <Rank />
//       <ImageLinkForm onInputChange = {onInputChange} 
//       onButtonSubmit = {onButtonSubmit}/>
//     </div>
//   );
// }

// const app = new Clarifai.App({
//   apiKey: '9b38951b416b4eb2a287c0da7916f3cb'
//  });



class App extends Component { // using Class Component
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    console.log('click');
    // this.setState({imageUrl: this.state.input});
    // app.models.predict('face-detection', this.state.input)
    // .then(response => {
    //   console.log('hi', response)
    //   if (response) {
    //     fetch('http://localhost:3000/image', {
    //       method: 'put',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify({
    //         id: this.state.user.id
    //       })
    //     })
    //       .then(response => response.json())
    //       .then(count => {
    //         this.setState(Object.assign(this.state.user, { entries: count}))
    //       })

    //   }
    // })
  }
    

render() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" num='500' bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange = {this.onInputChange} 
      onButtonSubmit = {this.onButtonSubmit}/>
      <FaceRecognition imageUrl ={this.state.imageUrl} />
    </div>
  );
}
}
 

export default App;
