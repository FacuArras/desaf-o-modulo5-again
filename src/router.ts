import { initPageHome } from "./pages/home/index-home";
import { initPagePlay } from "./pages/play/index-play";
import { initPageGame } from "./pages/game/index-game";
import { initPageResults } from "./pages/results/index-results";

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

    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }

    function handleRoute(route) {

        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({ goTo: goTo });

                if (container.firstChild) {
                    container.firstChild.remove();
                }

                container.appendChild(el);
            }
        }
    }

    if (location.pathname === "/") {
        goTo("/home");
    } else {
        handleRoute(location.pathname);
    };

    window.onpopstate = function () {
        handleRoute(location.pathname);
    };
}