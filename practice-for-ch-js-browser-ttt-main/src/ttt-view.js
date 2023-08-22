import Board from "../ttt_node/board";

class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard();
  }
  

  

  setupBoard() {
    const unorderedList = document.createElement("ul")
    console.log(unorderedList)
    for (let i = 0; i < 9; i++) {
      const list = document.createElement("li")
      unorderedList.appendChild(list)
    }
    this.el.appendChild(unorderedList)
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;