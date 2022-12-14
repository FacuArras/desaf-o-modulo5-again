import { state } from "../../state";

export function initPageGame(params) {
    const div = document.createElement("div");
    let counterId = 0;

    div.innerHTML = `
        <hands-comp type="bigHand" class="computerHands"></hands-comp> 
        <div class="counter-cont">0</div>
        <hands-comp type="bigHand" class="playerHands"></hands-comp>
    `

    const interval = setInterval(() => {
        counterId++;
        const counter = div.querySelector(".counter-cont") as any;
        counter!.innerHTML = `${counterId}`;

        if (counterId > 3) {
            clearInterval(interval);

            counter!.style.display = "none";
            const computerHandsEls = document.querySelector(".computerHands")?.shadowRoot?.querySelectorAll(".hand");

            for (const h of computerHandsEls!) {
                const currentComputerPlay = state.getState().currentGame.computerPlay;
                if (h.getAttribute("id") === currentComputerPlay) {
                    const found = document.querySelector(".computerHands")?.shadowRoot?.querySelector("#" + currentComputerPlay);
                    found?.classList.add("seleccionada");
                }
            }

            const anotherInterval = setInterval(() => {
                params.goTo("/results");
                clearInterval(anotherInterval);
            }, 1500)
        }
    }, 1000);

    /* Obtenemos las manos para poder darle un estilo inicial */
    const playerHands = div.querySelector(".playerHands")?.shadowRoot?.querySelectorAll(".hand");
    const computerHands = div.querySelector(".computerHands")?.shadowRoot?.querySelectorAll(".hand");
    for (const h of playerHands!) {
        h.classList.add("noSeleccionada")
    }
    for (const h of computerHands!) {
        h.classList.add("noSeleccionada")
    }

    /* Volvemos a obtener las manos para escuchar el evento y asi agregar o remover
    las clases correspondientes */
    state.getState().currentGame.playerPlay = "";

    div.querySelector(".playerHands")?.shadowRoot?.querySelector(".playerHands")?.addEventListener("click", e => {
        const target = e.target as any;
        const scissors = div.querySelector(".playerHands")?.shadowRoot?.querySelector("#scissors");
        const paper = div.querySelector(".playerHands")?.shadowRoot?.querySelector("#paper");
        const rock = div.querySelector(".playerHands")?.shadowRoot?.querySelector("#rock");

        if (target.id === "scissors") {
            scissors?.classList.toggle("seleccionada");
            paper?.classList.remove("seleccionada");
            rock?.classList.remove("seleccionada");
        } else if (target.id === "paper") {
            paper?.classList.toggle("seleccionada");
            scissors?.classList.remove("seleccionada");
            rock?.classList.remove("seleccionada");
        } else if (target.id === "rock") {
            rock?.classList.toggle("seleccionada");
            paper?.classList.remove("seleccionada");
            scissors?.classList.remove("seleccionada");
        }

        state.setPlay(target.id, computerPlay()!);
    });

    /* Creo la jugada de la compu */
    function computerPlay() {
        const num = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        switch (num) {
            case 1: return "rock";
                break;
            case 2: return "paper";
                break;
            case 3: return "scissors";
        }
    };
    return div;
}


