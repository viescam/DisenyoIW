function toggleVisibilityMenu() { 
    var elements = document.getElementsByClassName("main-menu__item"); 
    for (var i = 0; i < elements.length; i++) { 
        if (elements[i].className.indexOf("main-menu__item--visible") >= 0) { 
            elements[i].className = " main-menu__item main-menu__item--hide"; 
        } else { 
            elements[i].className = "main-menu__item main-menu__item--visible"; 
        } 
    } 
}


