import react from "react";
import { useState } from "react";

const PhotoGrid = ({ photos }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (photo) => {
    setFullscreenImage(photo);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="p-4 h-full w-full">
      {/* Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer group hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleImageClick(photo)}
          >
            <div className="text text-white mb-4 text-center absolute">
              {photo.alt}
            </div>
            <img
              src={photo.src}
              alt={photo.alt || `Photo ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeFullscreen}
        >
          <img
            src={fullscreenImage.src}
            alt={fullscreenImage.alt || "Fullscreen Image"}
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600"
            onClick={closeFullscreen}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};
export default PhotoGrid;
