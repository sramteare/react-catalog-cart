import { useContext } from "react"
import {CartDispatchContext, CartStateContext} from "../App"
import Counter from "./Counter"
import {update} from "../reducers/cartActions";

const counterConf = {
    min : 0,
    max : 10
};

const Cart = () => {
    let cartState = useContext(CartStateContext);
    let dispatch = useContext(CartDispatchContext);
    const handleChange = (evt) => {
            console.log(evt.target.dataset)
            let {id, value} = evt.target.dataset;
            dispatch(update({name:id,qty:Number(value)}));
        }
    const items = cartState.items;

    return (<div className="card product-list cart">
        <h1>Cart</h1>
<h2>Total cost ${cartState.total}</h2>
        <ul onClick={handleChange}>
        {items.length>0 && (<li className="head"><span>Name</span>
                <span>Description</span>
                <span>Qty</span>
                <span>Price</span></li>)
        }
        {items.length>0 ? items.map( prod =>(<li key={`cart-item-${prod.name.replace(/\s/)}`}>
                <span>{prod.name}</span>
                <span>{prod.desc}</span>
                <Counter {...counterConf} id={prod.name} value={prod.qty} />
                <span>{prod.price}</span>
            </li>)
            ) : <li>Cart Empty</li>}
        </ul>
        </div>)
};
export default Cart;