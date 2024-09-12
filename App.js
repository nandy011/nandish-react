{/* <div id="parent">
    <div id="child1">
        <h1></h1>
        <h2></h2>
    </div>

    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>

</div> */}


const heading = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", { id: "heading", className: "heading1 head" }, "Hi child1 This is H1 Tag"),
        React.createElement("h2", { id: "heading", className: "heading1 head" }, "Hi child1 This is H2 Tag")
        ]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", { id: "heading", className: "heading1 head" }, "Hi child2 This is H1 Tag"),
        React.createElement("h2", { id: "heading", className: "heading1 head" }, "Hi child2 This is H2 Tag")
        ]
    )
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)



// const heading = React.createElement("h1", { id: "heading", className: "heading1 head" }, "Reeeeeeeeeeeeeeeact");

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)