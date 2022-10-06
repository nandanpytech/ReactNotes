import React, { Component } from "react";
import Parent from "./components/useCallback/Parent";
// import CounterOne from "./components/UseReducer/CounterOne";
// import A from "./components/Usecontexxt/A";
// import Datafetch from "./components/fetch data/Datafetch";
// import Datafetch2 from "./components/fetch data/Datafetch2";
// import Usestatearray from "./components/Hooks/Usestatearray";
// import Ref from "./components/Refs/Ref";
// import One from "./components/One";
// import Binding from "./components/Binding";
// import Eventhandle from "./components/Eventhandle";
// import Greet from "./components/Greet";

// import Welcom from "./components/Welcom";
// import Main from './components/List render/Main';
// import Main2 from "./components/List render/Main2";
// import Form from './components/Form/Form';
// import A from "./components/Lifecycle A/A";
// import B from "./components/Lifecycle B/B";
// import Main from './components/Memo/Main';

// import Usestate from './components/Hooks/Usestate';

// export const MyContext = React.createContext();

class App extends Component {
  render() {
    return (
      <div>
        {/* <Greet name="nandan"></Greet>
        <Greet name="amith"></Greet>
        <Eventhandle></Eventhandle> */}

        {/* <Binding></Binding> */}

     {/* <One></One> */}
     {/* <Main></Main> */}
     {/* <Main2></Main2> */}

     {/* <Form></Form> */}
        {/* <A></A> */}
        {/* <B></B> */}

        {/* <Main></Main> */}

        {/* <Ref></Ref> */}
        {/* <Usestate></Usestate> */}

        {/* <Usestatearray></Usestatearray> */}
        {/* <Datafetch></Datafetch> */}
        {/* <Datafetch2></Datafetch2> */}
        {/* <MyContext.Provider value={"nandan"}>
        <A></A>
        </MyContext.Provider> */}
       {/* <CounterOne></CounterOne> */}
       <Parent></Parent>
      
      </div>
    );
  }
}

export default App;
