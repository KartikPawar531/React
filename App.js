// this is for single div
// const heading = React.createElement(
//     "h1", 
//     {Id: "heading", xyz: "ABC"},
//     "Hello world from react"
// );
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("first"));

// root.render(heading);

// this is for nested div
 <div id="parent">
    <div id="Child"> 
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div> 

const parent = React.createElement("div",  { id:"parent"},
    React.createElement( "div", {id: "child"}, [ 
            React.createElement("h1", {}, "Hey i'm a heading"),
            React.createElement("h2", {}, "Hey i'm a heading"), 
        ]),
    React.createElement("div", {id:"child2"},   [
            React.createElement("h1", {}, "Hello"),
            React.createElement("h2", {}, "Hello evryone"),
    ])

);

console.log(parent);    //object
const root = ReactDOM.createRoot(document.getElementById("first"));
root.render(parent);