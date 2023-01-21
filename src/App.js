import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Textform from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
  

function App() {

  //create state
  const [Mode, setMode] = useState('light');
  const [myAlert, setAlert] = useState(null);

  // change state
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showalert('Dark Mode has been enabled', 'success');

      // Change Web Title
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert('Light Mode has been enabled', 'success')

      // Change Web Title
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Navbar titleProps="TextUtils" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={myAlert} />
      <Textform heading="Enter the text to analyze below" Mode={Mode} showAlert={showalert} />
    </>
    // <Router>
    //   <Navbar titleProps="TextUtils" Mode={Mode} toggleMode={toggleMode} />
    //   <Alert alert={myAlert} />
    //   <Routes>
    //     {/* 
    //       exact means browser same URL and route url match
    //       Exmaple:
    //         /user/ -> component - 1
    //         /user/home -> component - 2
    //     */}
    //     <Route exact path="/" element={<Textform heading="Enter the text to analyze below" Mode={Mode} showAlert={showalert} />} />
    //     <Route exact path="/about" element={<About />} />
    //   </Routes>

    //   {/* <Switch>
    //     <Route path="/">
    //       <div className="container my-5">
    //         <Textform heading="Enter the text to analyze below" Mode={Mode} showAlert={showalert} />
    //       </div>
    //     </Route>

    //     <Route path="/about">
    //       <About />
    //     </Route>
    //   </Switch> */}
    // </Router>
  );
}

export default App;
