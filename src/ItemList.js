import LineItem from "./LineItem";

const ItemList = ({items, handleCheck, handleDelete})=> {
    return (
        <ui>{items.map((item)=>(
         <LineItem
         key={item.id}
         item={item}
         handleCheck={handleCheck}
         handleDelete={handleDelete}
         />
        ))}
        </ui> 
    )
}

export default ItemList