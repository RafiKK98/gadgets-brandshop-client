import { useContext } from "react";
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {
    const product = useLoaderData();
    const { name, photo, brand, type, price, description, rating } = product;
    const { user } = useContext(AuthContext);

    const handleAddToCart = () => {
        const userEmail = user.email;
        const cartItem = { name, photo, brand, type, price, description, rating, userEmail };
        fetch('https://gadgets-brand-shop-server-1ci9qmx4f-rafikk98.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cartItem),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added to shopping cart Successfully!',
                    position: 'top-right',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                    timer: 1500
                })
            }
        })
    }


    return (
        <div className="max-w-5xl mx-auto px-3">
            <div className="flex justify-between gap-5 my-10 py-2 px-4 shadow-xl rounded-lg">
                <figure>
                    <img className="rounded-lg" src={photo} alt="" />
                </figure>
                <div className="flex flex-col justify-evenly">
                    <div>
                        <h3 className="text-3xl font-medium">{name}</h3>
                        <p className="text-lg">Brand: {brand}</p>
                        <p className="text-lg">Type: {type}</p>
                        <p className="text-lg">Price: {price} TK.</p>
                        <p className="text-lg">Description: {description}</p>
                        <div className="rating">
                            Rating: 
                            <input type="radio" name="rating-1" className="mask mask-star" checked={rating == '1'} />
                            <input type="radio" name="rating-1" className="mask mask-star" checked={rating == '2'} />
                            <input type="radio" name="rating-1" className="mask mask-star" checked={rating == '3'} />
                            <input type="radio" name="rating-1" className="mask mask-star" checked={rating == '4'} />
                            <input type="radio" name="rating-1" className="mask mask-star" checked={rating == '5'} />
                        </div>
                    </div>
                    <button onClick={handleAddToCart} className="btn bg-[#CCC8AA] hover:bg-[#CCC8AA] hover:brightness-110">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails