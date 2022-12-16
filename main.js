
window.onload = function exampleFunction() {
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse")
    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active');
        console.log(toggle)
    });
    var grid = document.querySelector('#site-main .recent-work-area .images-flex');
    var msnry = new Masonry( grid, {
        itemSelector: '.grid-item',   gutter: 100,
        fitWidth: true,
    });
    var countUp = new CountUp('total', 2000);
    console.log(countUp)
    countUp.start();
}
var rellax = new Rellax('.rellax', {
    center: true
  });
function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}