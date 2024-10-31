
import PropTypes from "prop-types";
import './Recipe.css'

const Recipe = ({ recipe }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className="recipe ">
            
            <img src={recipe_image} alt={recipe_name} className="recipe-image" />
            
            <div className="recipe-content">
                <h2 className="recipe-title">{recipe_name}</h2>
                <p className="recipe-description">{short_description}</p>
                <ul className="recipe-ingredients">ingredient:6
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <div className="recipe-footer">
                    <span className="recipe-time">Prep Time: {preparing_time}</span>
                    <span className="recipe-calories">{calories}</span>
                </div>
            </div>
            
                <button className="bg-green-500 mb-2 p-4 rounded-2xl">want to cook </button>
            
        </div>
        
        
    );
};

Recipe.propTypes = {
    recipe: PropTypes.shape({
        recipe_id: PropTypes.number.isRequired,
        recipe_image: PropTypes.string.isRequired,
        recipe_name: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired,
    }).isRequired,
};

export default Recipe;
