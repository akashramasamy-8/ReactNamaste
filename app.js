import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h2",{},"Hi guys");
const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);


const val=React.createElement("div",{id:"container"},
    [React.createElement("h2",{id:"h1tage",key:"h1"},"H2 tag"),
        React.createElement("h3",{id:"h2tag",key:"h2"},"  H3 tag")
    ]
);
root.render(val);