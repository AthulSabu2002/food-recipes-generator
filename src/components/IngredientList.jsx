import { RiDeleteBin6Line } from "react-icons/ri";
import PropTypes from 'prop-types';

const IngredientList = ({ items, handleDelete }) => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, index) => (
                <li 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 
                             border border-slate-200 hover:border-slate-400
                             flex items-center justify-between"
                >
                    <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                    <RiDeleteBin6Line onClick={() => handleDelete(index)} className="text-slate-400 hover:text-red-500 cursor-pointer text-xl transition-colors" />
                </li>
            ))}
        </ul>
    );
}
IngredientList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default IngredientList;
