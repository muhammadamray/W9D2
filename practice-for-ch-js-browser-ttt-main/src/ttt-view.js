import Board from "../ttt_node/board";

class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard();
    this.el.addEventListener("click", this.handleClick.bind(this));
  
  }
  


  setupBoard() {
    const unorderedList = document.createElement("ul")
    console.log(unorderedList)
    for (let i = 0; i < 9; i++) {
      const list = document.createElement("li")
      list.classList.add("square")
      list.setAttribute("data-pos", [Math.floor(i / 3), i % 3]);
      unorderedList.appendChild(list) 
    }
    this.el.appendChild(unorderedList);
  }
  
  handleClick(e) {
    let target = e.target;
    this.makeMove(target);
  }

  makeMove(square) {
    if (square.classList.contains("square")) {
      let pos = square.getAttribute("data-pos").split(",");
      let mark = this.game.currentPlayer;
      this.game.playMove(pos);
      square.classList.add(mark);
      square.innerHTML = mark;
      if (this.game.isOver()) {
        this.handleGameOver();
      }
    }

  }
  
  handleGameOver() {
  }
}

export default View;
