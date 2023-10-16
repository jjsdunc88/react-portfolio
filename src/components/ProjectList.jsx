import "./ProjectList.css";



export default function ProjectList(){
  const projs = [
    {
      name: "FitGuide",
      link: "https://health-wellness-intro-planner-15375fd8b435.herokuapp.com/",
      github: "https://github.com/jjsdunc88/health-wellness-planner",
      screenshot: "https://user-images.githubusercontent.com/125617546/265812337-1ccde5fd-6ad7-41b5-b7f2-de00fa989523.png"
    },
    {
      name: "Express Note Taker",
      link: "https://note-expressjs-taker.herokuapp.com/",
      github: "https://github.com/jjsdunc88/expressjs-note-taker",
      screenshot: "https://user-images.githubusercontent.com/125617546/275381129-a42ff307-8b62-4f7d-8e4e-4385ef78526b.png"
    },
    {
      name: "Unique Password Generator",
      link: "https://jjsdunc88.github.io/unique-password-generator/",
      github: "https://github.com/jjsdunc88/unique-password-generator",
      screenshot: "https://raw.githubusercontent.com/jjsdunc88/unique-password-generator/main/assets/Screenshot%202023-04-02%20232734.png"
    },
    // {
    //   name: "PWA Text Editor",
    //   link: "https://pwa-text-editor-jake-9f6bf8284bfd.herokuapp.com/",
    //   github: "https://github.com/jjsdunc88/pwa-text-editor",
    //   screenshot: "https://user-images.githubusercontent.com/125617546/258664915-0e7d20d7-00d1-41c0-b8b6-f8e27348bfb6.png"
    // }
  ]

  return (
    <section>
      <h2>Projects</h2>
      <ul id="works">
      {
        projs.map((project, i) => (
          <li key = {i}>
            <a className="link" href={project.link}>
              {project.name}
            </a>
            <a className="github" href={project.github}>
              GitHub
            </a>
            <img className="screenshot" src={project.screenshot} alt="project screenshot" />
          </li>
        ))
      }
      </ul>
    </section>
  )
};