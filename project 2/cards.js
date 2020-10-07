var clicked = null


function onCard(e) {
    console.log("clicked", e.currentTarget)
    const target = e.currentTarget
    if (target === clicked || target.className.includes("done")) {
        return;
    }
    // } else if (clicked.getAttribute("data-color") === target.getAttribute("data-color")) {
    //     console.log(clicked.getAttribute("data-color"))
    //     return;


    // console.log(target.className)
    console.log(target.className)

    target.className = target.className.replace("hiddin-color", "1")
    target.className += " done"
    console.log(target.className)

    if (!clicked) {
        console.log(`1if`)
        clicked = target
        console.log(clicked)
    } else if (clicked) {
        if (clicked.getAttribute("data-color") === target.getAttribute("data-color")) {
            console.log(`equal`)
            x = target.detach()
            x = target.detach()
            clicked = null
        } else {
            target.className += "hiddin-color"
            clicked.className += "hiddin-color"
            console.log(target.className)
            clicked = null

        }
        

    }
}
