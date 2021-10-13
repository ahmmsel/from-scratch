export default function Header() {
  const menu = document.querySelector(".menu");
  const navbar = document.querySelector(".nav-list");
  const header = document.querySelector(".header");
// function
  const handleToggle = () => {
    menu.addEventListener("click", toggleEvent);
    function toggleEvent () {
      navbar.classList.toggle("nav-active");
    }
  }

  window.onscroll = function () {
    this.scrollY > 10 ? (header.classList.add("header-fixed")) : (header.classList.remove("header-fixed"))
  }
// end function
// call function
  handleToggle();
// end call function
}
