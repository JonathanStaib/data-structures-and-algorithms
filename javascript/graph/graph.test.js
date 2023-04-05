'use strict';

const Graph = require('./index');

describe('graph', () => {
  it('returns breadthFirst graph as expected', () => {
    let graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    const D = graph.addVertex('D');
    const E = graph.addVertex('E');
    const F = graph.addVertex('F');
    const G = graph.addVertex('G');
    const H = graph.addVertex('H');

    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(A, D);
    graph.addDirectedEdge(A, C);
    graph.addDirectedEdge(B, G);
    graph.addDirectedEdge(D, F);
    graph.addDirectedEdge(D, H);
    graph.addDirectedEdge(C, H);
    graph.addDirectedEdge(F, H);
    graph.addDirectedEdge(F, E);

    let response = graph.breadthFirst(A);
    let stringifiedRes = JSON.stringify(response);

    expect(stringifiedRes).toEqual();
  });
});
