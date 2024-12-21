import { useState } from "react";
import axios from 'axios';
import IngredientInput from './IngredientInput';
import IngredientList from './IngredientList';
import RecipeList from './RecipeList';
import RecipeModal from './RecipeModal';

const Body = () => {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    }

    const handleDelete = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const fetchRecipes = async () => {
        const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
        const ingredients = items.join(',');
        const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`;

        try {
            const response = await axios.get(url);
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const fetchRecipeDetails = async (id) => {
        const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

        try {
            const response = await axios.get(url);
            setSelectedRecipe(response.data);
            setShowModal(true);
        } catch (error) {
            console.error('Error fetching recipe details:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <IngredientInput 
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                handleAddItem={handleAddItem}
            />
            <IngredientList 
                items={items}
                handleDelete={handleDelete}
            />
            {items.length > 0 && (
                <div className="mt-4 flex items-center gap-4">
                    <button
                        onClick={fetchRecipes}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                        Get Recipe
                    </button>
                    <span className="text-slate-700 italic">&quot;Cooking is an art, and patience a virtue.&quot;</span>
                </div>
            )}
            <RecipeList 
                recipes={recipes}
                fetchRecipeDetails={fetchRecipeDetails}
            />
            {showModal && selectedRecipe && (
                <RecipeModal 
                    selectedRecipe={selectedRecipe}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    )
}

export default Body;