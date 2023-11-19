import Swal from "sweetalert2";


const Newsletter = () => {

    const handleNewsLetter = () => {
        Swal.fire({
            title: 'Congratulations!',
            html: 'You&apos;ve subscribed to our newsletter!!!!',
            icon:'success',
            showConfirmButton: false,
            timer: 4000
        })
        document.getElementById('newsletter-input').value = '';
    }

    return (
        <div className="bg-white max-w-7xl mx-auto my-16 py-16 dark:bg-[#CCC8AA] dark:text-white">
            <div className="text-center space-y-5">
                <h2 className="text-4xl font-medium">Subscribe to our Newsletter!</h2>
                <h4 className="text-2xl font-normal">Stay up to date with our latest Deals!</h4>
                <div className="join rounded-lg">
                    <input id="newsletter-input" className="input input-bordered join-item" type="email" placeholder="Email"/>
                    <button className="btn bg-[#CCC8AA] rounded-l-none rounded-r-lg text-white hover:bg-[#CCC8AA] hover:brightness-110 dark:bg-slate-400" onClick={handleNewsLetter}>Subscribe</button>
                </div>
                <p className="text-lg italic text-gray-500 dark:text-gray-100">Your email is safe with us, we don&apos;t spam!</p>
            </div>
        </div>
    )
}

export default Newsletter