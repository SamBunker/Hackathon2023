import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import About from "./components/About";
import WhatWeLove from './components/WhatWeLove';

function App() {
  return (
    <div className="App">
        {/*<Navbar />*/}
        <Hero />
        <About />
        <SecondPage />
        <ThirdPage />
        <WhatWeLove />
    </div>
  );
}

export default App;
