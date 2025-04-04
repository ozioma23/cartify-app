import { Link } from "react-router-dom";

const DeliveryPage = () => {
    return (
        <div className="overflow-auto relative w-screen min-h-screen bg-primary text-center flex flex-col items-center justify-center px-4 md:px-12 lg:px-20 py-8">
            <div className="w-full max-w-3xl p-4 mb-12 rounded-lg shadow-md bg-primary">
                <h2 className="text-lg lg:text-4xl font-bold mt-8 mb-4 text-white">Checkout Complete</h2>
                
                <div className="flex justify-center mb-6">
                    <img
                        src="/Images/bro.png"
                        alt="delivery van"
                        className="w-72 h-72 sm:w-96 sm:h-96 object-contain"
                    />
                </div>

                <p className="text-white mb-4 lg:text-2xl text-lg">Delivery in Progress... </p>

                <Link 
                    to="/buy"  
                    className="bg-secondary text-white px-6 py-2 mt-2 mb-4 rounded-md hover:bg-opacity-80 block mx-auto w-full sm:w-1/2"
                >
                    Done
                </Link>
            </div>
        </div>
    );
};

export default DeliveryPage;
