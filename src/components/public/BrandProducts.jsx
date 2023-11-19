import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom"

const BrandProducts = () => {
    const { brandName } = useParams();
    const loadedAllBrandData = useLoaderData();
    console.log('Current brand name: ', brandName);
    console.log('Loaded brand data', loadedAllBrandData);

    const [ brandData, setBrandData ] = useState(loadedAllBrandData);
    const [ adverts, setAdverts ] = useState([]);

    useEffect(() =>{
        const currentBrandData = loadedAllBrandData.filter(data => data.brand === brandName);
        setBrandData(currentBrandData)
        console.log('Current brand data: ', currentBrandData);
    }, [brandName, loadedAllBrandData]);

    useEffect(() => {
        fetch('/adverts.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const x = data.filter(dataItem => dataItem.brand_name == brandName)
            console.log(x[0].image_array);
            setAdverts(x[0]?.image_array);
        })
    }, [brandName])

    return (
        <div>
            {
                brandData.length > 0 ?
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={adverts[0]} className="w-full h-[485.656px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={adverts[1]} className="w-full h-[485.656px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={adverts[2]} className="w-full h-[485.656px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                :
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl text-center">Sorry!</h1>
                </div>
            }
            <div className="max-w-7xl mx-auto">
                <h3 className="text-4xl text-center my-10">Brand: {brandName}</h3>
                {
                    brandData.length > 0 ? 
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center my-10">
                        {
                            brandData.map(data => (
                                <div key={data._id} className="card lg:card-side bg-base-100 shadow-xl max-w-md max-h-fit">
                                    <figure className="lg:pl-5 py-4">
                                        <img src={data.photo} className="" alt="Album"/>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl">{data.brand}</h2>
                                        <h2 className="text-xl">{data.name}</h2>
                                        <h2 className="text-lg">{data.type}</h2>
                                        {/* <p>{data.description}</p> */}
                                        <p>{data.price} TK.</p>
                                        <div className="rating">
                                            Rating: 
                                            <input type="radio" name="rating-1" className="mask mask-star" checked={data.rating == '1'} />
                                            <input type="radio" name="rating-1" className="mask mask-star" checked={data.rating == '2'} />
                                            <input type="radio" name="rating-1" className="mask mask-star" checked={data.rating == '3'} />
                                            <input type="radio" name="rating-1" className="mask mask-star" checked={data.rating == '4'} />
                                            <input type="radio" name="rating-1" className="mask mask-star" checked={data.rating == '5'} />
                                        </div>
                                        <div className="card-actions justify-end">
                                            <div className="flex gap-3">
                                                <Link to={`/product-details/${data._id}`}>
                                                    <button className="btn btn-primary">Details</button>
                                                </Link>
                                                <Link to={`/update-product/${data._id}`}>
                                                    <button className="btn btn-primary">Update</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div> 
                    : 
                    <div>
                        <h3 className="text-2xl">Sorry, no products currently available of this brand!</h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default BrandProducts