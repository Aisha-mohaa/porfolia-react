import { useState } from "react";
import img from "./isha.png";
import imag from "./image.png";
import image from "./image copy.png";
import imagee from "./image copy 2.png";

function Img() {
  const [showAll, setShowAll] = useState(false);

  const images = [
    { src: img, title: "Event 1" },
    { src: imag, title: "Event 2" },
    { src: image, title: "Event 3" },
    { src: imagee, title: "Event 4" },
    { src: img, title: "Event 5" },
    { src: imag, title: "Event 6" },
    { src: image, title: "Event 7" },
    { src: imagee, title: "Event 8" },
    { src: img, title: "Event 9" },
    { src: imag, title: "Event 10" },
  ];

  const visibleImages = showAll ? images : images.slice(0, 5);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Events</h1>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 font-medium cursor-pointer hover:underline"
        >
          {showAll ? "Back" : "View All"}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {visibleImages.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg px-4 py-3 hover:bg-red-200 text-center"
          >
            <img
              className="h-36 w-44 object-cover rounded shadow mx-auto"
              src={item.src}
              alt={item.title}
            />
            <h1 className="mt-2 text-sm text-gray-700">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Img;
