import product from "./product.jsx";
function productTab(){
    
    return(
        <>
        <product  title='logitech mx master' idx={0}/>
        <product title='apple pencil second gen' idx={1} />
        <product title='zebronics'  idx={2} />
         <product title='petronics'  idx={3} />
        </>
    );
}
export default productTab;