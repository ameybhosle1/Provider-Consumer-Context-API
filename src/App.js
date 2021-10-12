import logo from './logo.svg';
import './App.css';
import React , {Fragment} from "react";
import Provider from './context/Provider';
import Context from "./context/Context";

function AgentTwo() {
  return (
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            <h3>AgentInfoo {context.data.mname}</h3>
          </Fragment>
        )
      }
    </Context.Consumer>
  );
}

function AgentOne() {
  return <AgentTwo />
}

function Agents() {
  return (
    <div>
      <Context.Consumer>
        {
          (context) =>(
            <Fragment>
              <h1>I am in Agents</h1>
              <h2>{context.data.Agent}</h2>
            </Fragment>
          )
        }
      </Context.Consumer>
      <AgentOne />
    </div>
  );
}

function App() {
  return (
    <div>
        <h1>Context API</h1>
        <Provider>
          <Agents />
        </Provider>
    </div>
  );
}

export default App;
