import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const { productId } = useParams();
    const loadedProductData = useLoaderData();
    const { name, photo, brand, type, price, description, rating } = loadedProductData;


    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const updatedName = form.get('name');
        const updatedPhoto =  form.get('photo');
        const updatedBrand = form.get('brand');
        const updatedType = form.get('type');
        const updatedPrice = form.get('price');
        const updatedDescription = form.get('description');
        const updatedRating = form.get('rating');
        const updatedProduct = { name: updatedName, photo: updatedPhoto, brand: updatedBrand, type: updatedType, price: updatedPrice, description: updatedDescription, rating: updatedRating };
        console.log(updatedProduct);

        fetch(`https://gadgets-brand-shop-server-1ci9qmx4f-rafikk98.vercel.app/products/${productId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully!',
                    position: 'top-right',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 1500
                })
                event.target.reset();
            }
        })
    }

    return (
        <div className="bg-[#F1EFEF] min-h-[80vh] my-16">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-4xl font-medium text-center mb-5">Update Product</h3>
                <form onSubmit={handleUpdateProduct} className="px-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Image url" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" defaultValue={name} className="input input-bordered w-full" />
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <select name="brand" className="select select-bordered">
                                <option disabled selected>Select brand</option>
                                <option selected={brand == 'Apple'}>Apple</option>
                                <option selected={brand == 'Samsung'}>Samsung</option>
                                <option selected={brand == 'MI'}>MI</option>
                                <option selected={brand == 'Vivo'}>Vivo</option>
                                <option selected={brand == 'Oppo'}>Oppo</option>
                                <option selected={brand == 'Oneplus'}>Oneplus</option>
                            </select>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <select name="type" className="select select-bordered">
                                <option disabled selected>Select type</option>
                                <option selected={type == 'Smartphone'}>Smartphone</option>
                                <option selected={type == 'Tablet'}>Tablet</option>
                                <option selected={type == 'Smartwatch'}>Smartwatch</option>
                                <option selected={type == 'Charger'}>Charger</option>
                                <option selected={type == 'Laptop'}>Laptop</option>
                                <option selected={type == 'Camera'}>Camera</option>
                                <option selected={type == 'Headphones'}>Headphones</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" defaultValue={price} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" placeholder="Description" name="description" defaultValue={description} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control flex-row mt-5">
                        <label className="label mr-5">
                            <span className="label-text">Rating</span>
                        </label>
                        <div className="flex items-center gap-3">
                            <input type="radio" name="rating" value="1" className="radio" defaultChecked={rating == '1'} />
                            <input type="radio" name="rating" value="2" className="radio" defaultChecked={rating == '2'} />
                            <input type="radio" name="rating" value="3" className="radio" defaultChecked={rating == '3'} />
                            <input type="radio" name="rating" value="4" className="radio" defaultChecked={rating == '4'} />
                            <input type="radio" name="rating" value="5" className="radio" defaultChecked={rating == '5'} />
                        </div>
                    </div>
                    <input type="submit" value="Update" className="btn md:btn-wide mt-5 bg-[#CCC8AA] hover:bg-[#CCC8AA] hover:brightness-110" />
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct