(function () {
    let doc = document.documentElement;
    let w = window;

    let curScroll;
    let prevScroll = w.scrollY || doc.scrollTop;
    let curDirection = 0;
    let prevDirection = 0;

    let header = document.getElementById("header");
    let toggled;
    let threshold = 200;

    let checkScroll = function () {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        } else {
            //scrolled up
            curDirection = 1;
        }

        if (curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if (toggled) {
            prevDirection = curDirection;
        }
    };

    let toggleHeader = function () {
        toggled = true;
        if (curDirection === 2 && curScroll > threshold) {
            header.classList.add("hide");
        } else if (curDirection === 1) {
            header.classList.remove("hide");
        } else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener("scroll", checkScroll);
})();
