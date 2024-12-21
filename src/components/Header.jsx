import { LuChefHat } from "react-icons/lu";

const Header = () => {
    return(
        <div className="flex items-center justify-center gap-2 p-5 bg-slate-600 text-white">
            <LuChefHat className="text-4xl text-yellow-400" />
            <span className="text-2xl font-semibold">Chef Claude</span>
        </div>
    )
}

export default Header;