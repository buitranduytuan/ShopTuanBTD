

// const ACTION_TYPE = {
//     LOADING: "LOADING",
//     GET_LIST_PRODUCT: "GET_LIST_PRODUCT",
// }

const initialState = {
    loading: false,
    listProduct: [],
}

var checkoutReducer = () => {return initialState}
// var checkoutReducer = (state, action) => {
//     switch (action.type) {
//         case ACTION_TYPE.LOADING:
//             return {
//                 ...initialState,
//                 loading: true,
//             }
//         case ACTION_TYPE.GET_LIST_PRODUCT:
//             return {
//                 ...initialState,
//                 listProduct: [{

//                 },
//                 {

//                 }
//                 ],
//             }

//         default:
//             return initialState;
//     }

// }

export default checkoutReducer;