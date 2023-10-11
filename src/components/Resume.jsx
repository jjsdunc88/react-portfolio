import {saveAs} from "file-saver"

export default function Resume(){
  function savePDF() {
    fetch("/resume.pdf")
      .then(response=>response.blob())
      .then(blob => {
        saveAs(blob, "Resume - Jake.pdf")
      }).catch(err=>{

      })
  }
    return (
      <nav>
        <h1>Resume</h1>
        <iframe style={{"height":400, "width":800}} src="https://docs.google.com/document/d/e/2PACX-1vT0Wlu7UOXw8jP8Jtd7qXYbZxbQjwQY-TTJGN-90z_o9wJRk5NBaaZo5Zg1-K0VRAubY8MNiW3ZhDoS/pub?embedded=true"></iframe>
        <br/>
        <button onClick={(e) => {savePDF()}}
>Download Resume</button> *

      </nav>
    )
  };