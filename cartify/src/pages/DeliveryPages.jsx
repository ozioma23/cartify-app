import { Link } from "react-router-dom";

const DeliveryPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-primary text-center">
            <div className="p-6 rounded-lg shadow-md">
                <h2 className="text-4xl font-bold mt-16 text-white">Checkout Complete</h2>
                
               
                <div className="flex justify-center">
                    <img
                        src="/Images/bro.png"
                        alt="delivery van"
                         className="w-96 h-96 object-contain"
                    />
                </div>

                <p className="text-white mb-6 text-2xl">Delivery in Progress... </p>

                <Link 
                    to="/buy"  
                    className="bg-secondary text-white px-6 py-4 mt-2 mb-12 rounded-md hover:bg-opacity-80 block mx-auto w-1/2"
                >
                    Done
                </Link>
            </div>
            <div className="">
                            <img
                                src="/shapes/irregular1.svg"
                                alt="Irregular Shape 1"
                                className="absolute top-[-30px] lg:top-[20px] left-0 sm:left-[-15px] w-[300px] h-[250px] sm:w-[400px] sm:h-[350px] md:w-[500px] md:h-[450px] lg:w-[600px] lg:h-[500px] pointer-events-none"
                            />

                            <img
                                src="/shapes/irregular2.svg"
                                alt="Irregular Shape 2"
                                className="absolute bottom-[-200px] md:bottom-[-20px] right-0 w-[300px] h-[250px] sm:w-[350px] sm:h-[300px] md:w-[400px] md:h-[350px] lg:w-[450px] lg:h-[400px] pointer-events-none"
                            />
                        </div>
        </div>
    );
};

export default DeliveryPage;
