export default function WishlistItem({item}){
 return <div className="border rounded-lg p-4"><h3>{item.name}</h3><p>${item.price}</p></div>;
}