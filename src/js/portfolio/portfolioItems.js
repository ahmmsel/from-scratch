import projectsData from "./data";
console.log(projectsData);

  const mapping = projectsData.data.map(item =>
    `
      <article class="project-content">
        <header class="project-header">
          <figure>
            <img src=${item.img} alt=${item.title} />
          </figure>
        </header>
        <footer class="project-footer">
          <div class="text">
            <h1>${item.title}</h1>
            <p>${item.description}</p>
          </div>
          <form class="project-form">
            <button type="button">view</button>
          </form>
        </footer>
      </article>
    `
  );

export default mapping;
