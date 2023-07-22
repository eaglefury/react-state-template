export const CounterReducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            return {counter: state.counter++};
        case 'DECREMENT_COUNTER':
            return {counter: state.counter--};
        default:
            return state;
    }
}