import {useQuery} from "@tanstack/react-query";
import {getProducts} from "@/services/productService";
import ProductGrid from "@/components/product/ProductGrid";
export default function ShopPage(){
 const {data,isLoading}=useQuery({queryKey:["products"],queryFn:()=>getProducts().then(r=>r.data)});
 if(isLoading) return <>Loading...</>;
 return <ProductGrid products={data.data}/>;
}