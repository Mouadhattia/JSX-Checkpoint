import logo from './logo.svg';
import './App.css';
import './style.css';
import mouadh from "./mouadh1.jpg"
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}/>
      <h1 className="title red">Attia Mouadh </h1>
      <br />
      
     <img  width="320" height="240" src={mouadh} alt ='myImage1' />
      <br />
      
 <img  width="320" height="240" src="/mouadh2.jpg" alt="myImage2"/>
 <br />

 <iframe width="320" height="240" src="https://www.youtube.com/embed/Y6aYx_KKM7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    </div>
  );
}

export default App;


