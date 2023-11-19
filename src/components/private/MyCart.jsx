import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const MyCart = () => {
    const loadedCartData = useLoaderData();
    const { user } = useContext(AuthContext);

    const [ cartData, setCartData ] = useState(loadedCartData);

    
    const handleDeleteFromCart = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://gadgets-brand-shop-server-1ci9qmx4f-rafikk98.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Cart item has been deleted.',
                            'success'
                        )
                        const remaining = cartData.filter(cof => cof._id !== _id);
                        setCartData(remaining);
                    }
                })
            }
        })
    }

    const userCart = cartData.filter(cartItem => cartItem?.userEmail == user.email);

    return (
        <div className="bg-[#F1EFEF] min-h-[80vh]">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between my-8">
                    <h3 className="text-3xl font-medium">Shopping Cart</h3>
                    <h3 className="text-3xl font-medium">{userCart.length} Items</h3>
                </div>
                <div className="divider"></div>
                {
                    userCart.map(cartItem => (
                        // <div key={cartItem._id} className="flex flex-col gap-5 mb-5">
                        //     <div className="card card-side max-w-sm bg-base-100 shadow-xl mx-auto">
                        //         <figure className="">
                        //             <img src={cartItem.photo} className="" alt="Movie"/>
                        //         </figure>
                        //         <div className="card-body">
                        //             <h2 className="card-title">{cartItem.name}</h2>
                        //             <p>{cartItem.description}</p>
                        //             <p>{cartItem.price} TK.</p>
                        //             <div className="card-actions justify-end">
                        //                 <button onClick={() => handleDeleteFromCart(cartItem._id)} className="btn btn-error">Delete</button>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        <div key={cartItem._id} className="flex flex-col gap-5 mb-5">
                            <div className="card card-side max-w-sm bg-base-100 shadow-xl mx-auto">
                                <figure className="">
                                    <img src={cartItem.photo} className="" alt="Movie"/>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{cartItem.name}</h2>
                                    <p>{cartItem.description}</p>
                                    <p>{cartItem.price} TK.</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleDeleteFromCart(cartItem._id)} className="btn btn-error">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyCart