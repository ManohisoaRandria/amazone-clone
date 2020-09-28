export const initialState = {
  basket: [
    // {
    //   id: "6",
    //   title: "sfgsfgsf Lorem sit amet consectetur adip lkjkdfs mkkoeprdfs",
    //   price: 0.5,
    //   rating: 5,
    //   image:
    //     "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU9N2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1583175286498",
    // },
  ],
  user: null,
};
export const basketSomme = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //mamerina anle zavatra vao2 ao amle data layer
      // de lasa iny ndray no izy
      return {
        //alaina le state teo aloha
        //de overiderna le property basket
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item) => action.id === item.id);
      if (index >= 0) {
        //hita le id tao amle basket de alana
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}
export default reducer;
