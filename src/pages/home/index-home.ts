export function initPageHome(params) {
    const div = document.createElement("div");
    div.classList.add("home");
    div.innerHTML = `
        <div class="title">
            <text-comp type="title">Piedra </text-comp>
            <br> 
            <text-comp type="title">Papel </text-comp><text-comp type="span">ó</text-comp>
            <br>
            <text-comp type="title">Tijeras</text-comp>
        </div>
        <button-comp class="button">Empezar</button-comp>
        <hands-comp></hands-comp>
    `

    div.querySelector(".button")?.shadowRoot?.querySelector(".button")?.addEventListener("click", e => {
        params.goTo("/play")
    });

    return div;
}