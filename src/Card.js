import { useContext, useReducer } from "react";
import './card.css';
import { CounterReducer } from "./CounterReducer";
import UserContext from "./userContext";

export function Card () {
    const user = useContext(UserContext);
    const title = `Welcome ${user}`;

    const initialState = {
        counter: 0
    }

    const [state, dispatch] = useReducer(CounterReducer, initialState);

    const incrementCounter = () => {
        dispatch({type: 'INCREMENT_COUNTER'});
    };
    const decrementCounter = () => {
        dispatch({type: 'DECREMENT_COUNTER'});
    };

    return (
        <div className="card">
            <div className="cardTitle">
                {title}
            </div>
            <div className="counter">
             {state.counter}
            </div>
           <input type='button' value='Increment' onClick={incrementCounter}/>
           <input type='button' value='Decrement'onClick={decrementCounter}/>
            
        </div>
    )  
}
