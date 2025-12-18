const heading=React.createElement("h2",{id:"heading"},"Hi guys");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const val=React.createElement("h1",{id:"heading"},
    [React.createElement("h2",{},"H2 tag"),
        React.createElement("h3",{},"H3 tag")
    ]
)
root.render(val);