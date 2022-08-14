export const initialState={
    basket:[
        {
            id:"3254354345",
            title:"Apple iPad Pro 12.9 inch ",
            price:595.99,
            rating:4,
            image:"https://i.pinimg.com/236x/56/e0/3a/56e03a84c41f2b4d5bdfe67ad56fecc2.jpg"

        },
        {
            id:"3254364345",
            title:"Apple iPad Pro 12.9 inch ",
            price:595.99,
            rating:4,
            image:"https://i.pinimg.com/564x/8e/8e/35/8e8e3546849d11e345a06cff35199878.jpg"

        }
    ],
    user:null,
};

// selector
export const getBasketTotal = (basket)=>
basket?.reduce((amount , item)=> item.price + amount,0);




//  data layer as state
const reducer =(state,action)=> {
    // console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            // logic for Add to basket
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
            
        case 'REMOVE_FROM_BASKET':
            // logic for Remove_from_basket
            let newBasket=[...state.basket];
            const index=state.basket.findIndex( (basketItem) => basketItem.id === action.id);
            if(index >=0){
                // index exist , remove it
                newBasket.splice(index,1);
                
            } else{
                console.warn(
                    `cant remove product(id:${action.id}) as its not product`
                )
            }
            return {...state,basket:newBasket};

        default:
            return state;
    }
    
}
export default reducer ;