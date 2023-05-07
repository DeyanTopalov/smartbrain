import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import { Component } from 'react'; //Convert to 
// import { useState } from 'react'; -> when using the Function


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


class App extends Component { // using Class Component
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

onInputChange = (event) => {
  console.log(event.target.value);
}

onButtonSubmit = () => {
  console.log('click');
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
    </div>
  );
}
}
 

export default App;
