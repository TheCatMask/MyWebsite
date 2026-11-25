const themeSwitch = document.getElementById("themeswitch")

themeSwitch.addEventListener("change", event => {

    if (document.body.classList.value !== "") {
        document.body.classList.remove(document.body.classList.value)
    }

    switch (themeSwitch.value) {
        case "default":
            break;
        case "light":
            document.body.classList.add("lightMode")
            break;
        case "green":
            document.body.classList.add("green")
            break;
    }

    var lastTheme = themeSwitch.value
});