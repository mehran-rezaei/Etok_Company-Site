import React, { createContext, useReducer, useState } from 'react';

const initialState = {
  redirecter : false,
  addPost : true,
  editPost : false,
  addProduct : false
}
const pageReducer = (state:any,action:any ) => {
    switch(action.type){   
            case "SET-REDIRECT" :
            return {
                redirecter : true,
            }
            case "SET-ADDPOST" :
                return {
                    addPost : true,
                } 
                
        case "SET-EDITPOST" :
               return {
                editPost : true,
               } 
               case "SET-ADDPRODUCT" :
                return {
                    addProduct : true,
                } 
        default : return state
    }
}
export const dashboardHandler = createContext<any | undefined>(undefined);
const dashboardReducer = ({children} :any) => {
    const [page , setPage] = useReducer(pageReducer,initialState)
    return (
         <dashboardHandler.Provider value={{page , setPage}}>
                    {children}
         </dashboardHandler.Provider>
    );
};
export default dashboardReducer ;