export default function ProductTable({products=[]}){
return <table className='w-full border-collapse'>
<thead><tr><th>Name</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead>
<tbody>{products.map(p=><tr key={p._id} className='border-t'><td>{p.name}</td><td>${p.price}</td><td>{p.stock}</td><td><button>Edit</button> <button>Delete</button></td></tr>)}</tbody>
</table>;
}