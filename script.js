const toggle = () => {

    var style = getComputedStyle(document.body);
    var t     = document.getElementById("check");
    
    var bg, cardBg, cardBgOnHover, fontPrimary, fontSecondary;

    if (t.value == "on") { //LIGHT MODE
        t.value = "off";

        bg            = style.getPropertyValue('--bg-color-light');
        cardBg        = style.getPropertyValue('--card-bg-color-light');
        cardBgOnHover = style.getPropertyValue('--card-bg-color-on-hover-light');
        fontPrimary   = style.getPropertyValue('--font-color-black');
        fontSecondary = style.getPropertyValue('--font-color-light-gray');
    }

    else if (t.value == "off") { //DARK MODE
        t.value = "on";

        bg            = style.getPropertyValue('--bg-color-dark');
        cardBg        = style.getPropertyValue('--card-bg-color-dark');
        cardBgOnHover = style.getPropertyValue('--card-bg-color-on-hover-dark');
        fontPrimary   = style.getPropertyValue('--font-color-white');
        fontSecondary = style.getPropertyValue('--font-color-light-blue');
    }

    document.documentElement.style.setProperty('--current-bg-color', bg);
    document.documentElement.style.setProperty('--current-card-bg-color', cardBg);
    document.documentElement.style.setProperty('--current-card-bg-color-on-hover', cardBgOnHover);
    document.documentElement.style.setProperty('--current-font-color-primary', fontPrimary);
    document.documentElement.style.setProperty('--current-font-color-secondary', fontSecondary);
}
