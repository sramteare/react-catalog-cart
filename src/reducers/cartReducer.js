const mergeItems = (items, newItem) => {
    let merged = [];
    let found = false;
    for(let item of items){
        if(item.name === newItem.name){
            item = {...item, qty:item.qty+newItem.qty};
            found = true;
        }
        merged.push(item)
    }
    if(!found) merged.push(newItem);
    return merged;
}
const getUpdatedItems = (state, item) => {
    let total = state.total;
    let updatedItems = [];
    for(let it of state.items){
        if(item.name===it.name){
            total += (item.qty - it.qty) * it.price;
            it = {...it, qty:item.qty}
        }
        updatedItems.push(it);
    }
    return {total, updatedItems}
}
export default function cartReducer(state, action) {
    switch(action.type){
        case "ADD" : return {
            ...state, 
            total: state.total + action.item.price, 
            items: mergeItems(state.items, {...action.item})
        }
        case "UPDATE" : {
            let {total, updatedItems} = getUpdatedItems(state, action.item);
            return {
                ...state, 
                total: total, 
                items: updatedItems
            }
        }
        default: throw new Error("Action not found", action.type);
    }
}