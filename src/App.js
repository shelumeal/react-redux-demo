import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import ItemContainer from "./components/ItemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemsContainer from "./components/ItemsContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer></CakeContainer>
        <HooksCakeContainer></HooksCakeContainer>
        <ItemContainer></ItemContainer>
        <NewCakeContainer></NewCakeContainer>

        <ItemsContainer cake></ItemsContainer>
        <ItemsContainer></ItemsContainer> */}

        <UserContainer></UserContainer>
      </div>
    </Provider>
  );
}

export default App;
