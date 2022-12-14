import { initPageHome } from "./pages/home/index-home";
import { initPagePlay } from "./pages/play/index-play";
import { initPageGame } from "./pages/game/index-game";
import { initPageResults } from "./pages/results/index-results";
const BASE_PATH = "/desafio-modulo5-remake"

const routes = [
    {
        path: /\/home/,
        component: initPageHome
    },
    {
        path: /\/play/,
        component: initPagePlay
    },
    {
        path: /\/game/,
        component: initPageGame
    },
    {
        path: /\/results/,
        component: initPageResults
    }
];

export function initRouter(container) {
    function isGithubPages() {
        return location.host.includes("github.io");
    }

    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }

    function handleRoute(route) {
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes) {
            if (r.path.test(newRoute)) {
                const el = r.component({ goTo: goTo });

                if (container.firstChild) {
                    container.firstChild.remove();
                }

                container.appendChild(el);
            }
        }
    }

    if (location.pathname === "/" || location.host.includes("github.io")) {
        goTo("/home");
    } else {
        handleRoute(location.pathname);
    };

    window.onpopstate = function () {
        handleRoute(location.pathname);
    };
}