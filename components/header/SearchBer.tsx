
import { ChevronDown, Search } from 'lucide-react';
const SearchBer = () => {
    return (

        <div className="hidden md:flex flex-1 mx-2 lg:mx-4 max-w-2xl">
            <div className="flex w-full items-center bg-white rounded overflow-hidden  ">
                <button className="hidden lg:flex items-center gap-1 px-3 py-2 border-r font-normal border-gray-300 text-sm text-gray-600 whitespace-nowrap bg-white hover:bg-gray-50 transition-colors">
                    All categories
                    <ChevronDown size={13} className="text-gray-400" />
                </button>
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="flex-1 px-3 py-3 text-sm focus:outline-none  text-[#ABA3A3] min-w-0"
                />
                <button className="px-3 py-3 bg-[#B6B6B6] hover:bg-gray-600 text-white transition-colors flex-shrink-0">
                    <Search size={22} />
                </button>
            </div>
        </div>

    );
};

export default SearchBer;