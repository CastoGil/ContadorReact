import ItemCount from "../contador/ItemCount";


function ItemListContainer(electro) {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`)
    }
    return(
        <div >
             <h1> 
            {electro.texto}
            <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
            </h1>
        </div>
       
    )
    
}
export default ItemListContainer;
//