

// const ACTION_TYPE = {
//     LOADING: "LOADING",
//     GET_LIST_PRODUCT: "GET_LIST_PRODUCT",
//     SHOW_NOTIFICATION: "SHOW_NOTIFICATION",
// }

const initialState = {
    loading: false,
    listProduct: [],
    content: null,
}

var homeReducer = () => { return initialState}
// var homeReducer = (state, action) => {
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

//         case ACTION_TYPE.SHOW_NOTIFICATION:
//             return {
//                 ...initialState,
//                 content: action.content,
//             }

//         default:
//             return initialState;
//     }

// }

export default homeReducer;


// export const showNotification = (notification) => {
//     return ({
//         type: ACTION_TYPE.SHOW_NOTIFICATION,
//         content: notification,
//     });
// }