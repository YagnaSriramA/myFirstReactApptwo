// const hone = document.createElement('h1');
// hone.textContent = 'this is an imperative way to '
// hone.className = 'header';
// root.appendChild(hone);

// const page = (
// <div>
//     <h1 className="header">I WILL WIN</h1>
//     <p className="header">I WILL WIN</p>
// </div>
// )

// console.log(page)

// ReactDOM.render(page, document.getElementById('root')) 


// const na = (
//     <nav>
//         <h1>YaGe</h1>
//         <ul>
//             <li><a href=''>Pricing</a></li>
//             <li><a href=''>About</a></li>
//             <li><a href=''>Contact</a></li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(na,document.getElementById('root'))

// document.getElementById('root').append(na)
// const be = document.getElementById('root')
// console.log(be)


// const fe = document.createElement('h1')
// fe.textContent='I WILL WIN'
// fe.className='header'
// document.getElementById('root').append(fe)


// const page= (
//     <div>
//         <img src="download.svg"></img>
//         <h1>Fun Facts about React</h1>
//         <ul>
//             <li>Was first released in 2013.</li>
//             <li>Was originally created by Jordan Walke.</li>
//             <li>Has well over 100k stars on GitHub.</li>
//             <li>Is maintained by Facebook.</li>
//             <li>Powers thousand of enterprise apps, including mobile apps.</li>
//         </ul>
//     </div>
    
// )

// ReactDOM.render(page, document.getElementById('root'))


// function Page(){
//     return (
//         <>
//             <h2>Reasons why Im excited to learn React</h2>
//             <ul>
//                 <li>Adds to my list of skills ik</li>
//                 <li>Adds to the breadth of my skills</li>
//                 <li>It gets me delicious package</li>
//                 <li>I can afford a comfortable lifestyle with the package that react gets me</li>
//                 <li>Makes me more hireable</li>
//             </ul>
//         </>
//     )
// }
















import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Header"
import TheRest from './MainContent';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Page(){
  return (
      <html>
          <Header />
          <TheRest />
          <Footer />
      </html>
      )
}


// ReactDOM.render(<Header />, document.getElementById('root'))
// ReactDOM.render(<Page />,  document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);