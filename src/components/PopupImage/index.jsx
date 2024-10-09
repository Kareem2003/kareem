import { FaTimes } from "react-icons/fa";

function Popup({ imageUrl, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Popup content */}
      <div
        className="relative max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white bg-red rounded-full hover:bg-opacity-75 transition-all duration-300"
          tabIndex="0"
        >
          <FaTimes size={20} />
        </button>

        {/* Image */}
        <img
          src={imageUrl}
          alt="Popup"
          className="w-full h-auto max-h-[80vh] object-contain rounded-md shadow-lg"
        />
      </div>
    </div>
  );
}

export default Popup;
