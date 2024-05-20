'use strict';
export default class Graph {
  constructor(numberNodes) {
    this.numberNodes = numberNodes;
    this.adjacencyMatrix = [];
    this.isDirected = true;
    for (let i = 0; i < this.numberNodes; i++) {
      this.adjacencyMatrix[i] = new Array(this.numberNodes).fill(0);
    }
  }
  // Генерує випадкові числа від 0 до 2
  randm(generator) {
    for (const arr of this.adjacencyMatrix) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = generator() * 2;
      }
    }
  }
  // множить на коефіцієнт на k числа в матриці. Округлює до 1 або 0.
  mulmr(k) {
    for (const arr of this.adjacencyMatrix) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * k >= 1 ? 1 : 0;
      }
    }
  }
  // Конвертація напрямленої матриці до ненапрямленої
  toUndirected() {
    const matrix = this.adjacencyMatrix;
    const oldMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      oldMatrix[i] = matrix[i].slice();
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] === 1) matrix[j][i] = matrix[i][j]; // Призначається симетрична вершина, якщо елемент матриці == 1.
      }
    }
    this.isDirected = !this.isDirected;
    return oldMatrix;
  }
}
