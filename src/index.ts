import { initRouter } from "./router";
import { state } from "../src/state";
import "./components/button-component";
import "./components/hands-component";
import "./components/text-component";

(function () {
    const root = document.querySelector(".root");
    initRouter(root);
    state.init();
})()