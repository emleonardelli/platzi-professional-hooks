import React from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.card, payload]
        });
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        });
    }

    return {
        addtoCart,
        removeFromCart,
        state,
    }
}

export default useInitialState;