import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <button 
      onClick={goBack}
      className="flex items-center space-x-2 p-2  text-white rounded-lg hover:bg-gray-600 transition-all"
    >
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H6M12 5l-7 7 7 7"
        />
      </svg>
    </button>
  );
};
export default BackButton