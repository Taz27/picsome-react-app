import React from "react";
import Header from "./components/Header";
import {Switch, Route} from "react-router-dom";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import CodedBy from "./components/CodedBy";

function App() {    
    return ( 
        //render 'Photos' and 'Cart' components according to the route path
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
            <CodedBy />
        </div>
    );
}

export default App;