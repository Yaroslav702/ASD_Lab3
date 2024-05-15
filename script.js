'use strict';
import Graph from './graph.js';
import GraphDraw from './graphDraw.js';
const n1 = 3;
const n2 = 2;
const n3 = 0;
const n4 = 5;
let k = 1.0 - n3 * 0.02 - n4 * 0.005 - 0.25;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const nodeRadius = 30;
const distanceFromCenter = 350;
const amountOfNodes = 10 + n3;
let graph = new Graph(amountOfNodes);
const generator = new Math.seedrandom([n1, n2, n3, n4].join);

document.addEventListener('keypress', (event) => {
  if (event.code === 'Digit1') {
    console.clear();
    context.clearRect(0, 0, canvas.width, canvas.height);
    graph = new Graph(amountOfNodes);
    const generator = new Math.seedrandom([n1, n2, n3, n4].join);
    graph.randm(generator);
    graph.mulmr(k);
    const graphDraw = new GraphDraw(canvas, graph, nodeRadius);
    graphDraw.graphDrawTriangle(distanceFromCenter);
    console.log(graph.adjacencyMatrix);
  }
  if (event.code === 'Digit2') {
    console.clear();
    context.clearRect(0, 0, canvas.width, canvas.height);
    graph = new Graph(amountOfNodes);
    const generator = new Math.seedrandom([n1, n2, n3, n4].join);
    graph.randm(generator);
    graph.mulmr(k);
    graph.toUndirected();
    const graphDraw = new GraphDraw(canvas, graph, nodeRadius);
    graphDraw.graphDrawTriangle(distanceFromCenter);
    console.log(graph.adjacencyMatrix);
  }
});
