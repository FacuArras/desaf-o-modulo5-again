class TextComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const shadow = this.attachShadow({ mode: "open" });

        if (this.getAttribute("type") === "title") {
            const title = document.createElement("h1");
            title.textContent = this.textContent;
            const style = document.createElement("style");
            style.innerHTML = `
                h1{
                    font-weight: 700;
                    font-size: 100px;
                    margin: 0;
                    color: #009048;
                    display: inline;
                }
            `;

            shadow.appendChild(title);
            shadow.appendChild(style);
        } else if (this.getAttribute("type") === "button") {
            const button = document.createElement("p");
            button.textContent = this.textContent;
            const style = document.createElement("style");
            style.innerHTML = `
                p{
                    font-weight: 400;
                    font-size: 45px;
                    margin: 0;
                    color: #D8FCFC;
                }
            `;

            shadow.appendChild(button);
            shadow.appendChild(style);
        } else if (this.getAttribute("type") === "subtitle") {
            const subTitle = document.createElement("h2");
            subTitle.textContent = this.textContent;
            const style = document.createElement("style");
            style.innerHTML = `
                h2{
                    font-weight: 600;
                    font-size: 50px;
                    margin: 0 auto;
                    text-align: center;
                    max-width: 300px;
                }
            `;

            shadow.appendChild(subTitle);
            shadow.appendChild(style);
        } else if (this.getAttribute("type") === "resultTitle") {
            const resultTitle = document.createElement("h4");
            resultTitle.textContent = this.textContent;
            const style = document.createElement("style");
            style.innerHTML = `
                h4{
                    font-weight: 400;
                    font-size: 55px;
                    text-align: center;
                    color: #000000;
                    margin: 0;
                }
            `;

            shadow.appendChild(resultTitle);
            shadow.appendChild(style);
        } else if (this.getAttribute("type") === "resultText") {
            const resultText = document.createElement("h5");
            resultText.textContent = this.textContent;
            const style = document.createElement("style");
            style.innerHTML = `
                h5{
                    font-weight: 400;
                    font-size: 45px;
                    text-align: end;
                    color: #000000;
                    margin: 0;
                }
            `;

            shadow.appendChild(resultText);
            shadow.appendChild(style);
        } else if (this.getAttribute("type") === "warning") {
            const warning = document.createElement("h2");
            warning.textContent = this.textContent;
            const style = document.createElement("style");
            style.innerHTML = `
                h2{
                    font-weight: 600;
                    font-size: 80px;
                    margin: 0 auto;
                    text-align: center;
                    max-width: 300px;
                }
            `;

            shadow.appendChild(warning);
            shadow.appendChild(style);
        }
    }
}
customElements.define("text-comp", TextComponent);
