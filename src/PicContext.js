import React from "react";
const PicContext = React.createContext();

function PicContextProvider(props) {
    return (
        <PicContext.Provider value={""}>
            {props.children}
        </PicContext.Provider>
    );

}
export {PicContextProvider, PicContext};