import Swal from "sweetalert2";

const AddProduct = () => {


    const handleAddProduct = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = form.get('name');
        const photo =  form.get('photo');
        const brand = form.get('brand');
        const type = form.get('type');
        const price = form.get('price');
        const description = form.get('description');
        const rating = form.get('rating');
        const newProduct = { name, photo, brand, type, price, description, rating };
        console.log(newProduct);

        fetch('https://gadgets-brand-shop-server-1ci9qmx4f-rafikk98.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added Successfully!',
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
                <h3 className="text-4xl font-medium text-center mb-5">Add a Product</h3>
                <form onSubmit={handleAddProduct} className="px-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Image url" name="photo" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <select name="brand" className="select select-bordered">
                                <option disabled selected>Select brand</option>
                                <option>Apple</option>
                                <option>Samsung</option>
                                <option>MI</option>
                                <option>Vivo</option>
                                <option>Oppo</option>
                                <option>Oneplus</option>
                            </select>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <select name="type" className="select select-bordered">
                                <option disabled selected>Select type</option>
                                <option>Smartphone</option>
                                <option>Tablet</option>
                                <option>Smartwatch</option>
                                <option>Charger</option>
                                <option>Laptop</option>
                                <option>Camera</option>
                                <option>Headphones</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control flex-row mt-5">
                        <label className="label mr-5">
                            <span className="label-text">Rating</span>
                        </label>
                        <div className="flex items-center gap-3">
                            <input type="radio" name="rating" value="1" className="radio" />
                            <input type="radio" name="rating" value="2" className="radio" />
                            <input type="radio" name="rating" value="3" className="radio" />
                            <input type="radio" name="rating" value="4" className="radio" />
                            <input type="radio" name="rating" value="5" className="radio" />
                        </div>
                    </div>
                    <input type="submit" value="Add" className="btn md:btn-wide mt-5 bg-[#CCC8AA] hover:bg-[#CCC8AA] hover:brightness-110" />
                </form>
            </div>
        </div>
    )
}

export default AddProduct