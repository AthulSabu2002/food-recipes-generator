import { AiOutlineClose } from "react-icons/ai";
import PropTypes from 'prop-types';

const RecipeModal = ({ selectedRecipe, setShowModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold">{selectedRecipe.title}</h2>
                        <button 
                            onClick={() => setShowModal(false)}
                            className="text-slate-400 hover:text-slate-600"
                        >
                            <AiOutlineClose size={24} />
                        </button>
                    </div>
                    <img 
                        src={selectedRecipe.image} 
                        alt={selectedRecipe.title} 
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Ingredients:</h3>
                            <ul className="list-disc pl-5">
                                {selectedRecipe.extendedIngredients.map((ing) => (
                                    <li key={ing.id}>{ing.original}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Instructions:</h3>
                            <div 
                                dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions }} 
                                className="text-slate-700"
                            />
                        </div>
                        <div className="flex gap-4 text-sm text-slate-600">
                            <span>Ready in: {selectedRecipe.readyInMinutes} mins</span>
                            <span>Servings: {selectedRecipe.servings}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
RecipeModal.propTypes = {
    selectedRecipe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        extendedIngredients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                original: PropTypes.string.isRequired,
            })
        ).isRequired,
        instructions: PropTypes.string.isRequired,
        readyInMinutes: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
    }).isRequired,
    setShowModal: PropTypes.func.isRequired,
};

export default RecipeModal;
