
import price from "./price.jsx";
function Product( {title}){
    let oldPrices=['122','2344','2333','333'];
     let newPrices=['1223','23434','23333','3333'];
return (
    <div className='product'>
       <h4>{title}</h4>
        <p>Description</p>
        <price oldprice=
        '123'   newprice='345'/>
    </div>
);
}