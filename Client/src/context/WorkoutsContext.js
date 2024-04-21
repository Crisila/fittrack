import React, { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

const workoutReducer = (state, action) => {
     switch (action.type) {
          case 'GET_WORKOUTS':
               return {
                    workouts: action.payload
               };
          case 'CREATE_WORKOUT':
               return {
                    workouts: [...state.workouts, action.payload]
               };
          default:
               return state;
     };
};

export const WorkoutsContextProvider = ({ children }) => {
     const [state, dispatch] = useReducer(workoutReducer, {
          workouts: []
     });

     return (
          <WorkoutsContext.Provider value={{ state, dispatch }}>
               {children}
          </WorkoutsContext.Provider>
     );
};
