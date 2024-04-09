import React from "react";
import styled, { keyframes } from "styled-components";

import SideSwipe from "./SideSwipe";

function AboutAnimation() {

    return <Wrapper>

        <div className="top-heading">
            <h1><SideSwipe text="Shortest Path Visualizer"/> </h1>
        </div>

        <div className="med-heading">
            <h3><SideSwipe text="This visualizer helps in finding the shortest distance between two points in the map."/>  </h3>
        </div>

    </Wrapper>
}

function FirstAnimation() {

    return <Wrapper>

        <div className="top-heading">
            <h1><SideSwipe text="Dijkstra Algorithm"/> </h1>
        </div>

        <div className="med-heading">
            <h3>  <SideSwipe text="Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks."/>  </h3>
        </div>

    </Wrapper>
}

function SecondAnimation() {

    return <Wrapper>

        <div className="top-heading">
            <h1><SideSwipe text="Breadth First Algorithm"/> </h1>
        </div>

        <div className="med-heading">
            <h3>  <SideSwipe text="Breadth-first search is a graph traversal algorithm that starts traversing the graph from the root node and explores all the neighboring nodes."/> </h3>
        </div>

    </Wrapper>
}

function ThirdAnimation() {

    return <Wrapper>

        <div className="top-heading">
            <h1><SideSwipe text="Bidirectional Algorithm"/> </h1>
        </div>

        <div className="med-heading">
            <h3> <SideSwipe text="Bidirectional search replaces single search graph with two smaller sub graphs, one starting from initial vertex and other starting from goal vertex. The search terminates when two graphs intersect." /></h3>
        </div>

    </Wrapper>
}

function FourthAnimation() {

    return <Wrapper>

        <div className="top-heading">
            <h1><SideSwipe text="Bellman-Ford Algorithm"/> </h1>
        </div>

        <div className="med-heading">
            <h3><SideSwipe text="The Bellman-Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all the other vertices in a weighted digraph." /> </h3>
        </div>

    </Wrapper>
}

const animation = keyframes`
    0% { opacity: 0; transform: translateY(-100px); }
    25% { opacity: 1; transform: translateY(0); }
    75% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-100px); }
`

const Wrapper = styled.div`
    opacity : 1;
    animation-name: ${animation};
    animation-duration: 8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
`

export { AboutAnimation, FirstAnimation, SecondAnimation, ThirdAnimation, FourthAnimation }