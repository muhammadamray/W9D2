import View from "./ttt-view"
import Game from "../ttt_node/game"

document.addEventListener("DOMContentLoaded", () => {
const game = new Game();
let element = document.querySelector(".ttt")
const view = new View(game, element);
console.log(view);
});


