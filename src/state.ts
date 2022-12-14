type Plays = "rock" | "paper" | "scissors";

const state = {
    data: {
        currentGame: {
            playerPlay: "",
            computerPlay: ""
        },

        history: [],
    },
    listeners: [],

    init() {
        const localData = localStorage.getItem("rock-paper-scissors");
        if (JSON.parse(localData!)) {
            this.setState(JSON.parse(localData!));
        }
    },

    getState() {
        return this.data;
    },

    setState(newState) {
        this.data = newState;

        for (const cb of this.listeners) {
            cb(newState);
        }

        localStorage.setItem("rock-paper-scissors", JSON.stringify(newState));
    },

    setPlay(playerPlay: Plays, computerPlay: Plays) {
        const currentState = this.getState();
        currentState.currentGame.playerPlay = "";
        currentState.currentGame.computerPlay = "";
        currentState.currentGame.playerPlay = playerPlay;
        currentState.currentGame.computerPlay = computerPlay;

        currentState.history.push({
            playerMove: currentState.currentGame.playerPlay,
            computerMove: currentState.currentGame.computerPlay
        });

        this.setState(currentState);
    },

    whoWins(player, computer) {
        const currentState = this.getState();
        /* const player = currentState.currentGame.playerPlay;
        const computer = currentState.currentGame.computerPlay; */

        const win = [
            player === "scissors" && computer === "paper",
            player === "rock" && computer === "scissors",
            player === "paper" && computer === "rock"
        ];

        const lose = [
            player === "scissors" && computer === "rock",
            player === "rock" && computer === "paper",
            player === "paper" && computer === "scissors"
        ]

        if (win.includes(true)) {
            return 1;
        } else if (lose.includes(true)) {
            return -1;
        } else if (player === "") {
            return "No te olvides de elegir";
        } else {
            return 0;
        }
    },

    getHistoryOfPoints() {
        let player = 0;
        let computer = 0;

        const currentHistory = this.getState().history;
        for (const play of currentHistory) {
            if (this.whoWins(play.playerMove, play.computerMove) === 1) {
                player++;
            } else if (this.whoWins(play.playerMove, play.computerMove) === -1) {
                computer++;
            }
        }

        return {
            player,
            computer
        };
    },

    subscribe(callback: (any) => any) {
        this.listeners.push(callback);
    }
};

export { state }; 