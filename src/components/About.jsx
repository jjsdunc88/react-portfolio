import picture from "../assets/self.png"
export default function About(){
    return (
      <nav>
        {/* <h1>About Me</h1>  */}
        <img src={picture}/>
        
        <p>
          <b>Software Developer with eight years of experience in business operations management.</b>
        </p>
        <p>
         <b> Currently living in Philadelphia, PA. </b>
        </p>
      </nav>
    )
  };