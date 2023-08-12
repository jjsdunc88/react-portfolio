import "./ProjectList.css";

export default function ProjectList(){
  const projs = [
    {
      name: "PWA Text Editor",
      link: "https://pwa-text-editor-jake-9f6bf8284bfd.herokuapp.com/",
      github: "https://github.com/jjsdunc88/pwa-text-editor",
      screenshot: "https://user-images.githubusercontent.com/125617546/258664915-0e7d20d7-00d1-41c0-b8b6-f8e27348bfb6.png"
    },
    {
      name: "PWA Text Editor",
      link: "https://pwa-text-editor-jake-9f6bf8284bfd.herokuapp.com/",
      github: "https://github.com/jjsdunc88/pwa-text-editor",
      screenshot: "https://user-images.githubusercontent.com/125617546/258664915-0e7d20d7-00d1-41c0-b8b6-f8e27348bfb6.png"
    },
    {
      name: "PWA Text Editor",
      link: "https://pwa-text-editor-jake-9f6bf8284bfd.herokuapp.com/",
      github: "https://github.com/jjsdunc88/pwa-text-editor",
      screenshot: "https://user-images.githubusercontent.com/125617546/258664915-0e7d20d7-00d1-41c0-b8b6-f8e27348bfb6.png"
    },
    {
      name: "PWA Text Editor",
      link: "https://pwa-text-editor-jake-9f6bf8284bfd.herokuapp.com/",
      github: "https://github.com/jjsdunc88/pwa-text-editor",
      screenshot: "https://user-images.githubusercontent.com/125617546/258664915-0e7d20d7-00d1-41c0-b8b6-f8e27348bfb6.png"
    }
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