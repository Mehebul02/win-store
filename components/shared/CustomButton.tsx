
interface CustomButtonProps {
    text: string;
    href: string;
}

const CustomButton = ({ text,  }: CustomButtonProps) => {
    return (
        
        <div className='w-full'>
            <button className="cursor-pointer w-full bg-cyan-600 text-white text-[12px] py-2 rounded-sm hover:bg-cyan-700 transition">
                {text}
            </button>

        </div>
        
    );
};

export default CustomButton;