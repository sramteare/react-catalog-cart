import {memo, useContext } from "react";
import {CartDispatchContext} from "../App"
import {add} from "../reducers/cartActions"

const Catalog =  ({items=[]}) =>{
    let dispatch = useContext(CartDispatchContext);

    return (<div className="card product-list">
            <h1>Product Catalog</h1>
            <ul>
            { items.length > 0 ? items.map( prod =>(<li key={prod.name}>
                    <span>{prod.name}</span>
                    <span>{prod.desc}</span>
                    <span>{prod.price}</span>
                    <span><button onClick={()=>dispatch(add({...prod, qty:1}))}>+</button></span>
                </li>))
                : <li>Empty</li>}
            </ul>
        </div>)
}
export default memo(Catalog);