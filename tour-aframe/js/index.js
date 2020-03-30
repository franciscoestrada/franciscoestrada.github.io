function show(id) {
    document.getElementById('sky').setAttribute('src', '#' + id);
}
var b = document.getElementsByTagName("a-image");
var i;
for (i = 0; i < b.length; i++) {
    b[i].setAttribute("animation__mouseenter", "property: scale; to: 1.5 1.5 1.5; dur: 300; startEvents: mouseenter");
    b[i].setAttribute("animation__mouseleave", "property: scale; to: 1 1 1; dur: 300; startEvents: mouseleave");
}
