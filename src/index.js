import React from 'react';
import ReactDOM from 'react-dom';
import MyInfo from "./components/MyInfo";
import App from "./components/App";
import './index.css';


ReactDOM.render(<App/>,document.getElementById("root"))

// 3.
// ReactDOM.render(<MyInfo/>,document.getElementById("root"))

// 2.
// function MyApp(){
//     return(
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>
//     );
// }
//
// ReactDOM.render(
//     <MyApp/>,
//     document.getElementById("root"))


//1.
// ReactDOM.render(<div><h1>Hello</h1><p>It's my pratice</p></div>,document.getElementById("root"))
// var myNewp=document.createElement("p")
// myNewp.innerHTML = "This is my paragraph"