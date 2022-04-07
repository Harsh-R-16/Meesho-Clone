export const ADD_TO_CART = "ADD_TO_CART";
// <<<<<<< HEAD
export const INCREASE_STEP = "INCREASE_STEP";
export const SAVE_ADDRESS = "SAVE_ADDRESS";
export const INCREASE_COUNT="INCREASE_COUNT"
export const DECREASE_COUNT="DECREASE_COUNT"
export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });

export const increaseStep = () => {
    return {
        type: INCREASE_STEP,
    }
}
export const saveAddress = (payload) => {
    return {
        type: SAVE_ADDRESS,
        payload
    }
}
export const increaseCount = () => {
    return {
        type: INCREASE_COUNT,
    }
}
export const decreaseCount = () => {
    return {
        type: DECREASE_COUNT,
    }
}

// =======
export const ADD_NAME = "ADD_NAME";

// export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const addName = (payload) => ({ type: ADD_NAME, payload });

