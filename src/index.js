import React from 'react';
import {render} from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';
import './App.css';
import {Header} from './includes/Header'
import {Footer}  from "./includes/Footer"
// ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

class Myapp extends React.Component {
    render (){
         var user = {
             hobbies : ["playing Footbat",'reading','coding'],
             college : "NITC",
             company :'setlmint'
             
         }
            return (
                <div classNamen="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Header/>
                     <p>
                             This is add by me
                     </p>
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      This is expression 23 + 3 = {23+3}
                    </a> 
                    <Footer name={"vas"} intialAge={25} user={user}> 
                    name={"vas"}
                    <Header/>
                    <p> this is passing to footer without using props  </p>
                    </Footer>

                  </header>
                </div>
              );
            }
}
render(<Myapp/>, window.document.getElementById('root'));
serviceWorker.unregister();