import { useState } from "react";

const Gallery = ({ images }: { images: (string | undefined)[] }) => {
  const validImages = images.filter(Boolean) as string[];
  const [mainImage, setMainImage] = useState(validImages[0]);

  return (
    <div className="flex flex-col items-center gap-4 flex-1">
      <img
        src={mainImage}
        alt="main"
        className="w-full max-w-sm rounded-lg object-cover"
      />

      <div className="flex gap-3">
        {validImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            className={`w-20 h-20 rounded-lg cursor-pointer object-cover transition 
              ${mainImage === img ? "ring-2 ring-secondary" : ""}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery