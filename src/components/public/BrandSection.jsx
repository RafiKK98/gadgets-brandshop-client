import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const BrandSection = () => {

    const [ brandsData, setBrandsData ] = useState([]);

    useEffect(() => {
        fetch('/brands.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBrandsData(data);
        })
    },[])

    return (
        <div className="text-center py-20 bg-white dark:bg-slate-700 dark:text-[#CCC8AA]">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-4xl uppercase font-medium mb-10">Shop By Brands</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        brandsData.map(brand => (
                            <Link key={brand.id} to={`/brand-products/${brand.brand}`}>
                                <div className="card max-w-xs mx-auto bg-[#F1EFEF] hover:shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={brand.img} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{brand.brand}</h2>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                    
                    {/* <Link to="/brand-products">
                        <div className="card max-w-xs mx-auto bg-[#F1EFEF] hover:shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={`https://i.ibb.co/cYNvj7f/apple-logo.webp`} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Apple</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/brand-products">
                        <div className="card max-w-xs mx-auto bg-[#F1EFEF] hover:shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={`https://i.ibb.co/RNJn3mz/Samsung-Logo.webp`} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Samsung</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/brand-products">
                        <div className="card max-w-xs mx-auto bg-[#F1EFEF] hover:shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={`https://i.ibb.co/9nX1NSD/mi-logo.webp`} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">MI</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/brand-products">
                        <div className="card max-w-xs mx-auto bg-[#F1EFEF] hover:shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={`https://i.ibb.co/FbHGzPG/vivo-logo.webp`} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Vivo</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/brand-products">
                        <div className="card max-w-xs mx-auto bg-[#F1EFEF] hover:shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={`https://i.ibb.co/9tR5vHy/oppo-logo.webp`} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Oppo</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/brand-products">
                        <div className="card max-w-xs mx-auto bg-[#F1EFEF] hover:shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={`https://i.ibb.co/JzfvYHy/one-plus-logo.webp`} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Oneplus</h2>
                            </div>
                        </div>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default BrandSection