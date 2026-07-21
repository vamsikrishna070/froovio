export default function ProductReviews({reviews=[]}){
 return <section><h2 className='text-2xl font-bold mb-4'>Reviews</h2>{reviews.length?reviews.map((r,i)=><div key={i} className='border-b py-3'><strong>{r.user}</strong><p>{r.comment}</p></div>):<p>No reviews yet.</p>}</section>;
}
