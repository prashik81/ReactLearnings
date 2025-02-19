 
// **
// *
// *
// *
// *<div id="parrent">
// *         <div id = "child">
// *             <h1 id: heading >i am h1 tag in child div </h1>
// *             <h2 id: heading2 >i am h1 tag in child div </h2>
// *     </div>
// *</div>
// *
// *
// *
// *
// **



// const parent = React.createElement('div', {id:"parrent"},
//     React.createElement('div', {id:"child"}, 
//         React.createElement('h1', {id:"heading"}, " i am h1 tag in child div  ")
//     )
// ) 

//if we want to add sibling of h1 tag that is h2 tag then add both in array

// const parent = React.createElement('div', {id:"parrent"},
//     React.createElement('div', {id:"child"}, 
//        [React.createElement('h1', {id:"heading"}, " i am h1 tag in child div "),React.createElement('h2', {id:"heading2"}, " i am in child div and sibling of h1 tag ")]
//     )
// ) 




 
// **
// *
// *
// *
// *<div id="parrent">
// *         <div id = "child">
// *             <h1 id: heading >i am h1 tag in child div </h1>
// *             <h2 id: heading2 >i am h1 tag in child div </h2>
// *         </div>
// *         <div id = "child">
// *             <h1 id: heading >i am h1 tag in child div </h1>
// *             <h2 id: heading2 >i am h1 tag in child div </h2>
// *         </div> 
// *</div>
// *
// *
// *
// *
// **



const parent = React.createElement('div', {id:"parrent"},
    [React.createElement('div', {id:"child1"}, 
       [React.createElement('h1', {id:"heading"}, " i am h1 tag in child1 div "),React.createElement('h2', {id:"heading2"}, " i am in child1 div and sibling of h1 tag ")]
    ),
    React.createElement('div', {id:"child2"}, 
        [React.createElement('h1', {id:"heading"}, " i am h1 tag in child2 div "),React.createElement('h2', {id:"heading2"}, " i am in child2 div and sibling of h1 tag ")]
     )]
) 






// const heading = React.createElement('h1',
//     { id : "headin", xyz:"abc"},//here in these object we pass attributes
//     "Hello world from react");

    console.log(parent);// heading is not a h1 tag yet,,,  it it will return us javascript object or we can say react element
    
const roott = ReactDOM.createRoot(document.getElementById('roott'));

roott.render(parent);
//render method => this method is resposible for take this object(paren) convert it into a html(browser understands) and put it onto a dom 
