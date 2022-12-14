export function initPagePlay(params) {
    const div = document.createElement("div");
    div.classList.add("play");
    div.innerHTML = `
        <div class="subtitle">
            <text-comp type="subtitle">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-comp>
        </div>
        <button-comp class="button">¡Jugar!</button-comp>
        <hands-comp></hands-comp>
    `

    div.querySelector(".button")?.shadowRoot?.querySelector(".button")?.addEventListener("click", e => {
        params.goTo("/game")
    });

    return div;
}