import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {getProduct} from '@/services/productService';
import ProductGallery from '@/components/product/ProductGallery';
import ProductReviews from '@/components/product/ProductReviews';
import Button from '@/components/ui/Button';

export default function ProductDetailsPage(){
 const {slug}=useParams();
 const {data,isLoading}=useQuery({queryKey:['product',slug],queryFn:()=>getProduct(slug).then(r=>r.data)});
 if(isLoading) return <>Loading...</>;
 return <div className='mx-auto max-w-7xl p-6 grid md:grid-cols-2 gap-10'>
   <ProductGallery images={data.images}/>
   <div>
     <h1 className='text-4xl font-bold'>{data.name}</h1>
     <p className='text-2xl text-orange-600 my-4'>$ {data.price}</p>
     <p>{data.description}</p>
     <Button className='mt-6'>Add to Cart</Button>
   </div>
   <div className='md:col-span-2'><ProductReviews reviews={data.reviews||[]}/></div>
 </div>;
}
