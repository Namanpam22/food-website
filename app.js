let menu = document.querySelector(".menu-li");

document.querySelector(".ham-icon").onclick = function () {
  menu.classList.toggle("active");
};

let menu_item = document.querySelectorAll(".menu-li-item");
// console.log(menu_item)
menu_item.forEach((e) => {
    e.onclick=()=>{
        menu.classList.toggle("active");
    }
});
