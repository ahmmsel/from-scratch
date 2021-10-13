import mapping from './portfolioItems';

export default function Portfolio() {
  const projectsSection = document.querySelector(".projects");
  const projects = mapping.join('');
  projectsSection.innerHTML = `${projects}`
}
