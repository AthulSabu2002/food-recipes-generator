import PropTypes from 'prop-types';

const RecipeList = ({ recipes, fetchRecipeDetails }) => {
    return (
        <div className="mt-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <li 
                        key={recipe.id} 
                        onClick={() => fetchRecipeDetails(recipe.id)}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 
                                 border border-slate-200 hover:border-slate-400 cursor-pointer"
                    >
                        <h3 className="text-lg font-semibold">{recipe.title}</h3>
                        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md mt-2" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    })).isRequired,
    fetchRecipeDetails: PropTypes.func.isRequired,
};

export default RecipeList;
