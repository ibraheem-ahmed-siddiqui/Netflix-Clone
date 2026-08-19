

const showBox = document.getElementById("showContainerList-ul");

document.getElementById("showScrollButtonLeft-button").addEventListener("click", () => {

    showBox.scrollTo({
        left: 0,
        behavior: "smooth"
    });
});

document.getElementById("showScrollButtonRight-button").addEventListener("click", () => {
    showBox.scrollTo({
        left: showBox.scrollWidth,
        behavior: "smooth"
    })
})