import Nbar from "./NavxFooter/NavBar";
import { Link } from "react-router-dom";
const NotFound = () => {
    return(
        <div className=" bg-cover bg-full bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/not.jpg)` }}>

            <Nbar />
       <h1 className="text-7xl mt-[58px]  ml-5   md:mt-36 md:ml-20 red font-bold text-yellow-50 animate-pulse ">Page Not Found </h1>
       <h1 className="text-5xl ml-5 mt-2 md:ml-20 font-thin  text-red-100 animate-pulse ">404 </h1>
     <Link to="/" > <button type="button" class="text-white ml-[163px] md:ml-20 mt-10 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" > Go back Home</button></Link>
     <div className="h-[219px]"></div>
        </div>
       
    );
};
export default NotFound;