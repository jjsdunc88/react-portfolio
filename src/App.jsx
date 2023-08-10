import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Nav from "./components/Nav";
import ProjectList from "./components/ProjectList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About'; 

function App() {
const [ page, setPage ] = useState("About")

function pageNav() {
  if(page == "About"){
    return (<About/>)
  }
  else if(page == "Portfolio"){
    return (<ProjectList/>)
  }
  else if(page == "Contact"){
    return (<Contact/>)
  }
  else if(page == "Resume"){
    return (<Resume/>)
  }
}

  return (
    <>
      <Nav setPage={setPage}/>
      <button ></button>
      {pageNav()}
      {/* <div className="card">
  <div className="card-body">
    <h5 className="card-title">{page}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
    </>
  )
}

export default App;
