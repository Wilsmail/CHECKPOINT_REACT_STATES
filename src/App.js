import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from './Layout/Navbar'
import {Show} from './component/Show'
import Count from './component/Count'
import React from 'react'

S
class App extends React.Component {
  state= {
    person:{
      fullName: "NGUESSAN Kouassi Jean",
      profession:"Web-developpeur & Infographe Graphiste",
      bio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,"
    },
    show:false
  };

    handleclik= () =>{
      let show = this.state.show
        this.setState({show:!show})
      }

  render(){
          return (
                  <div className="App">
                      <Navbar/>
                      {this.state.show ? <Show data={this.state}/> : ""}<br/>
                      <Button variant="outline-dark" style={{width:300, fontWeight:600}} onClick={this.handleclik} >Affiche</Button><br/>
                      <span style={{display:"flex", width:50, paddingLeft:"47%", paddingTop:12, textAlign:"center"}}>COMPTEUR: <Count></Count></span>
                  </div>
  );
}
}

export default App;
