document.addEventListener("DOMContentLoaded", function () {
    let specialDivs = document.querySelectorAll("div.special");
    let globalCounter = 1;

    specialDivs.forEach((div, divIndex) => {
        let paragraphs = div.querySelectorAll("p");

        paragraphs.forEach((p, pIndex) => {
            p.textContent = `Div ${divIndex + 1}, Paragraf ${pIndex + 1}: ${
                p.textContent
            }`;
            globalCounter++;
        });
    });
});
