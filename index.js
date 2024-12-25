pinput1 = document.getElementById('input1')
pinput2 = document.getElementById('input2')

if (document.getElementById('ilightmode').checked) {
    pinput1.style.fontWeight = 'bolder'
} 

function alternando() {
    var linkCSS = document.getElementById('css-link')

    if (linkCSS.href.endsWith("lightmode.css")) {
        linkCSS.href = "darkmode.css";
    } 
}

function alternando2() {
    var linkCSS = document.getElementById('css-link')
    
    if (linkCSS.href.endsWith("darkmode.css")) {
        linkCSS.href = "lightmode.css";
    }
}

function darkmode() {
    let divshowtheme = document.getElementById('lightmode')
    if (divshowtheme.style.display == 'none') {
        divshowtheme.style.display = 'block'
    } else {
        divshowtheme.style.display = 'none'
    }
}