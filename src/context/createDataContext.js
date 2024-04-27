import React, {useReducer, createContext} from 'react';

export default (reducer, actions, defaultValue) => {
  //Create context instance
  const Context = createContext();

  //Creates a provider component to wrap around other components
  const Provider = ({children}) => {
    //Dispatch function to call reducer
    const [state, dispatch] = useReducer(reducer, defaultValue);

    //Binds actions to dispatch
    const boundActions = {};

    //Loops through actions object and binds each action to dispatch
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    //Returns a provider component with a value prop of state and bound actions
    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
