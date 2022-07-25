import React from "react";
import './App.css';
import HomePage  from "./components/HomePage"
class App extends React.Component{
  render(){
  return (
    <div className="App">
      <div className="abs">
       <HomePage />
       </div>
    </div>
  );
}
}

export default App;
