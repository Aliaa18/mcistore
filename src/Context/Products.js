import axios from "axios";
import { createContext , useState} from "react";


export let ProductContext=  createContext();

export default function ProductContextProvider(props){
 
    const [products, setProducts] = useState(null)
    
    async function getProducts(keyword){
        const {data} = await axios.get('https://mcishop.vercel.app/api/v1/products' , {
        })
            setProducts(data)
       }
   return < ProductContext.Provider  value={{products}}>
           {props.children}
</ProductContext.Provider>


}