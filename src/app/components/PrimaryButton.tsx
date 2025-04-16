interface ButtonProps {
    title: string;
    onClick?: () => void;
    className?: string;
  }
  
  const PrimaryButton = ({ title, onClick, className }: ButtonProps) => (
    <button 
        onClick={onClick}
        className={`bg-indigo-500 cursor-pointer font-bold text-white py-2 px-4 rounded-full hover:bg-violet-600 transition duration-300 ${className}`}>
        {title}
    </button>
  );
  
  export default PrimaryButton;
  