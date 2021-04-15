import './App.css'
import Game from "./components/Game"
// import {Provider} from 'react-redux'
// import { combineReducers, createStore } from 'redux';
// import reduxStore from "./redux/store"

function App() {

    // const store = createStore(combineReducers(reduxStore))

    return (
        // <Provider store={store}>
            <Game/>
        // </Provider>
    );
}

export default App;
