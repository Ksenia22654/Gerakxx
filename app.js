// Появление меню при наведении на Menu
const menuBtn = document.getElementById("menu-button");
const menuList = document.querySelector(".menu-list-inner");

menuBtn.addEventListener('mouseover', function(){
    menuList.classList.add("opened");
});

menuBtn.addEventListener('mouseleave', function(){
    menuList.classList.remove("opened");
});

menuList.addEventListener('mouseenter', function(){
    menuList.classList.add("opened");
});

menuList.addEventListener('mouseleave', function(){
    menuList.classList.remove("opened");
});

menuBtn.addEventListener('click', function(){
    menuList.classList.toggle("opened"); 
});
// -------------------------------------------------