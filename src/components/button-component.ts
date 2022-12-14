class ButtonComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render() {
        const shadow = this.attachShadow({ mode: "open" });
        const button = document.createElement("button");
        button.classList.add("button")
        button.innerHTML = `
            <text-comp type="button">${this.textContent}</text-comp>
        `;
        const style = document.createElement("style");
        style.innerHTML = `
                button{
                    padding: 0 50px;
                    height: 87px;
                    background-color: #006CFC;
                    border-radius: 10px;
                    border: solid #001997 10px;
                    font-family: "Odibee Sans", cursive;
                }
            `;

        shadow.appendChild(button);
        shadow.appendChild(style);
    }
}
customElements.define("button-comp", ButtonComponent);
