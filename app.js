{/* <div id="parent">
    <div id="child1">
        <h1 id="child_h1"></h1>
        <h1 id="child_h2"></h1>
    </div>
    <div id="child2">
        <h1 id="child_h4"></h1>
        <h1 id="child_h5"></h1>
        <h1 id="child_h6"></h1>
        <h1 id="child_h7"></h1>
    </div>
</div> */}

const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "child_h1" }, "I am h1 tag"),
        React.createElement("h1", { id: "child_h2" }, "I am h2 tag")]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "child_h4" }, "I am h4 tag"),
        React.createElement("h1", { id: "child_h5" }, "I am h5 tag"),
        React.createElement("h1", { id: "child_h6" }, "I am h6 tag"),
        React.createElement("h1", { id: "child_h7" }, "I am h7 tag")])
]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);