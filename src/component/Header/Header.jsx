
import image4 from '../../images/header.jpg';
import './Header.css'
const Header = () => {
    return (
        <div className="header-img">
            <img className="w-full rounded-2xl" src={image4} alt="description" />
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  font-bold text-center text-4xl">
                Discover an exceptional cooking class tailored for you! 
            </h2>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white  text-center mt-10 text-sm">
            Discover mouth-watering dishes, handpicked ingredients, and cooking techniques to elevate your meals.
            </p>
        </div>
    );
};
export default Header