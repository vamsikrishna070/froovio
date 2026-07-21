export default function ProductGallery({images=[]}){
 const img=images[0]||'https://placehold.co/800x600';
 return <div><img className='rounded-xl w-full' src={img} alt='product'/></div>;
}
