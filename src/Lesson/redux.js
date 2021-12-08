// redux.js (export)
class Store {
    _state = null;
    _reducer = null;
    _observer = null;

    constructor(state, reducer) {
        this._state = state;
        this._reducer = reducer;
    }

    // вернуть state
    getState = () => this._state;

    subscribe = (observer) => {
        this._observer = observer;
    }

    // поменять state в зависимости от action
    dispatch = (action) => {
        this._state = this._reducer(this._state, action);
      /*   if (action.type === 'CHANGE_NAME') {
            this._state.name = action.payload;
        } */

        this._observer();
    }
}

// component.js
const Component = (props) => {
    const handleChange = (newValue) => {
        // create action
        const action = {
            type: 'CHANGE_NAME',
            payload: newValue,
        };

        // call dispatch
        store.dispatch(action);
    };

    return (<input type="text" value={props.name} onChange={handleChange}></input>)
}


// index.js
export { Store } from 'redux';

const initialState = {
    name: '',
};
const store = new Store(initialState, reducer);
store.subscribe(rerender);

const reducer = (state, action) => {
    if (action.type === 'CHANGE_NAME') {
        return {
            name: action.payload
        };
    }

    return state;
}
const App = () => {
    const state = store.getState();

    return (<div>
        <Component name={state.name} />
    </div>)
}

const rerender = () => {
    return <App />;
}
rerender();