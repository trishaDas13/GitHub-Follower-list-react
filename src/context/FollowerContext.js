import React, { createContext, useContext, useState } from 'react'

const FollowerContexts = createContext({});

const FollowerContext = (props) =>{

    const[list, setList] = useState([]);

    return (
        <FollowerContexts.Provider value={{list, setList}}>
            { props.children }
        </FollowerContexts.Provider>
    );
}

export const FollowerCtx = () =>{
    const ctx = useContext(FollowerContexts);
    return ctx;
}

export default FollowerContext;