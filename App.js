const heading = React.createElement("h1" , 
    {
        id: "tittle",

    } , 
    "Heading 1"
    
    );

    const heading2 = React.createElement(
        "h2" , 
    {
        id: "tittle",

    } , 
    "Heading 2"
    
    );

    const container = React.createElement(
        "div", {
        id: "container"
    },
    heading, heading2    
    );


    console.log(heading);


    const root = ReactDOM.createRoot(document.getElementById("root"));

    //passing the react elemnt inside the root
    root.render(container);