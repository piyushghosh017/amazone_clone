//  setting data layer which context API for user baske.
// we need to tract basket
import React,{createContext,useContext,useReducer} from 'react';

//this is data layer.
export const StateContext=createContext();

// build a provider.
export const StateProvider=({reducer,initialState,children})=>{
    
   return <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
};

// This is how we use it inside component
export const useStateValue =() => useContext(StateContext)

