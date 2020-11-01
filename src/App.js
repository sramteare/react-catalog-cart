import { createContext, useReducer } from 'react';
import './App.css';
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import cartReducer from "./reducers/cartReducer"

let catalogData = {
  items : [
    {name:"Shirt", desc: "Excellant shirt.", price: 10},
    {name:"T-Shirt", desc: "Excellant bright T-shirt.", price: 8},
    {name:"Leather Shoe", desc: "Well made leather shoe.", price: 20},
    {name:"Sneaker", desc: "comfortable Sneakers.", price: 12},
    {name:"Wallet", desc: "Excellant leather wallet.", price: 5},
    {name:"Sports Shoe", desc: "Excellant sport shoes.", price: 18}
  ]
}
export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

function App() {
  const [cartState, dispatch] = useReducer( cartReducer, {total:0, items:[]});
  return (
    <div className="App">
      <CartStateContext.Provider value={cartState} >
        <CartDispatchContext.Provider value={dispatch}>
          <Catalog items={catalogData.items}/>
          <Cart />
        </CartDispatchContext.Provider>
      </CartStateContext.Provider>
    </div>
  );
}

export default App;
