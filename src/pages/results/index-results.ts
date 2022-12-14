import { state } from "../../state";
const winImage = require("url:../../../images/win-img.svg");
const loseImage = require("url:../../../images/lose-img.svg");
const tieImage = require("url:../../../images/tie-img.svg");

export function initPageResults(params) {
    const div = document.createElement("div");

    const playerMove = state.getState().currentGame.playerPlay;
    const computerMove = state.getState().currentGame.computerPlay;

    const playerStats = state.getHistoryOfPoints().player;
    const computerStats = state.getHistoryOfPoints().computer;

    if (state.whoWins(playerMove, computerMove) === 1) {
        div.classList.add("win");
        div.innerHTML = `
            <img class="win__image" src="${winImage}"></img>
            <div class="results">
            <text-comp class="result__title" type="resultTitle">Resultados</text-comp>
            <text-comp class="result__text" type="resultText">Vos: ${playerStats}</text-comp>
            <text-comp class="result__text" type="resultText">Máquina: ${computerStats}</text-comp>
            </div>
            <button-comp class="button">Volver a jugar</button-comp>
        `
    } else if (state.whoWins(playerMove, computerMove) === -1) {
        div.classList.add("lose");
        div.innerHTML = `
            <img class="lose__image" src="${loseImage}"></img>
            <div class="results">
                <text-comp class="result__title" type="resultTitle">Resultados</text-comp>
                <text-comp class="result__text" type="resultText">Vos: ${playerStats}</text-comp>
                <text-comp class="result__text" type="resultText">Máquina: ${computerStats}</text-comp>
            </div>
            <button-comp class="button">Volver a jugar</button-comp>
        `
    } else if (state.whoWins(playerMove, computerMove) === 0) {
        div.classList.add("tie");
        div.innerHTML = `
            <img class="tie__image" src="${tieImage}"></img>
            <div class="results">
                <text-comp class="result__title" type="resultTitle">Resultados</text-comp>
                <text-comp class="result__text" type="resultText">Vos: ${playerStats}</text-comp>
                <text-comp class="result__text" type="resultText">Máquina: ${computerStats}</text-comp>
            </div>
            <button-comp class="button">Volver a jugar</button-comp>
        `
    } else {
        div.classList.add("tie");
        div.innerHTML = `
            <text-comp type="warning">No te olvides de elegir una mano!!</text-comp>
        `
        const finalInterval = setInterval(() => {
            params.goTo("/game");
            clearInterval(finalInterval);
        }, 3500)
    }

    div.querySelector(".button")?.shadowRoot?.querySelector(".button")?.addEventListener("click", e => {
        params.goTo("/game")
    });

    return div;
}