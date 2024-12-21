import PropTypes from 'prop-types';

const IngredientInput = ({ inputValue, handleInputChange, handleAddItem }) => {
    return (
        <div className="flex gap-4 items-center justify-center mb-8">
            <input 
                type="text" 
                name="input" 
                id="input" 
                placeholder="eg: Carrot" 
                value={inputValue}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-600 w-64"
            />
            <button 
                onClick={handleAddItem}
                className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors"
            >
                Add Ingredient
            </button>
        </div>
    );
};

IngredientInput.propTypes = {
    inputValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleAddItem: PropTypes.func.isRequired,
};

export default IngredientInput;
