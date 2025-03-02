import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <img className="h-screen cover min-w-full fixed -z-10" src="https://kashmirobserver.net/wp-content/uploads/2022/10/Digitization-of-Land-Record-Pic.jpg" />
                <button onClick={() => navigate('/login')} className="p-4 text-xl px-6 bg-yellow-500 mx-[50%] mt-[50%] text-nowrap translate-x-[-50%]" >
                    View Services
                </button>
            </div>
        </>

    );
}

export default Home