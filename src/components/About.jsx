import picture from "../assets/self.png"
export default function About(){
    return (
      <nav>
        {/* <h1>About Me</h1>  */}
        <img src={picture}/>
        <p>
          Newly graduated software developer making my way in the world.
        </p>
      </nav>
    )
  };