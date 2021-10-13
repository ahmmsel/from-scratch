export default function Tabs() {
  const tabs = document.querySelectorAll(".tabs .tab");
  const target = document.querySelectorAll(".landing-content");
  const tabsArray = Array.from(tabs);
  const targetArray = Array.from(target);

  tabsArray.forEach((element) => {
    element.addEventListener("click", handleChange);
  });

  function handleChange(e) {
    tabsArray.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    targetArray.forEach((elementTarget) => {
      elementTarget.classList.remove("active");
    });
    document.querySelector(e.currentTarget.dataset.content).classList.add("active");
  }
}
