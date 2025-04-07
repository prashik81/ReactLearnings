 
 import React from "react";
 import ReactDOM from "react-dom/client";
 import Body from "./Components/Body";
 import Header from "./Components/Header";

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



// const parent = React.createElement('div', {id:"parrent"},
//     [React.createElement('div', {id:"child1"}, 
//        [React.createElement('h1', {id:"heading"}, " i am h1 tag in child1 div "),React.createElement('h2', {id:"heading2"}, " i am in child1 div and sibling of h1 tag ")]
//     ),
//     React.createElement('div', {id:"child2"}, 
//         [React.createElement('h1', {id:"heading"}, " i am h1 tag in child2 div "),React.createElement('h2', {id:"heading2"}, " i am in child2 div and sibling of h1 tag ")]
//      )]
// ) 






// // const heading = React.createElement('h1',
// //     { id : "headin", xyz:"abc"},//here in these object we pass attributes
// //     "Hello world from react");

//     console.log(parent);// heading is not a h1 tag yet,,,  it it will return us javascript object or we can say react element
    
// const roott = ReactDOM.createRoot(document.getElementById('roott'));

// roott.render(parent);
// //render method => this method is resposible for take this object(paren) convert it into a html(browser understands) and put it onto a dom 




// //ep-3///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // React.createElement => React Element which is js Object => render to HTMLElement

// const headin = React.createElement("h1", {id: "headingg"},"Namaste React");

// console.log(headin);//returns whole object
// root.render(headin);




// //JSX (transpiled  before it reaches  the js) - Parcel - Babel

// //JSX => React.createElement => ReactElement which is js object => render to  HTMLElement
// const jsxheading = <h1 id="headi"> Namaste React using JSX</h1>;
// console.log(jsxheading);


//these are react elements
// const elem = <span>React element</span>




// const title = ( 
//     <h1 className="head" tabIndex="5">
//         {elem} //another react element in title name react element
//         Namaste {"hiii"}
//     </h1>
// )

// //this is react functioonal components
// const HeadingComponent1 = () => ( 
// <h1>Namaste React Functional Component</h1>

// )
// //or

// const HeadingComponent2 = ()=>(

//     <div id= "Container">
//     <h2>{100+200}</h2>
//     {title}//react element inside func component

// /*this 3 are same */
//      <HeadingComponent1 /> //another func component inside funnc componenet
//     <HeadingComponent1></HeadingComponent1>
//     {HeadingComponent1()}

//     <h1>Namaste React Functional Component2</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<Title />)
// root.render(<HeadingComponent2 />)

// //your code is readable because you are writing jsx + javascript not react

/**
 * Header
 *  - Logo
 *  - nav Items
 * Body
 *  - Search
 *  - RestaurnatConatainer 
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 * 
 */




  
  const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Body />
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout />); // Render the AppLayout component
  























