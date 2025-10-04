import { useState } from "react";

const Gallery = ({ images }: { images: (string | undefined)[] }) => {
  const validImages = images.filter(Boolean) as string[];
  const [mainImage, setMainImage] = useState(validImages[0]);

  return (
    <div className="flex flex-1 flex-col items-center gap-4">
      <img
        src={mainImage}
        alt="main"
        className="aspect-[4/3] w-full max-w-[600px] rounded-lg object-cover"
      />

      <div className="grid w-full max-w-[600px] grid-cols-3 gap-3">
        {validImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            className={`w-full aspect-[4/3] rounded-lg cursor-pointer object-cover transition 
          ${mainImage === img ? "ring-4 ring-secondary" : ""}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  )
};

export default Gallery