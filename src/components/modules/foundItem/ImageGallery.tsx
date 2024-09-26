import { FC } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

type TImageGalleryProps = { images: string[] };

const ImageGallery: FC<TImageGalleryProps> = ({ images }) => {
  return (
    <LightGallery
      elementClassNames={`grid gap-2 ${
        images.length === 1
          ? "grid-cols-1"
          : images.length === 2
            ? "grid-cols-1"
            : "grid-cols-2"
      } mt-2`}
      plugins={[lgThumbnail, lgZoom]}
      speed={500}
    >
      {images.map((image, index) => (
        <Link
          key={index}
          className={`w-full ${
            images.length === 3 && index === 0 ? "col-span-2" : "col-span-1"
          }`}
          href={image}
        >
          <Image
            alt={`image${index}`}
            className={`${
              images.length === 1
                ? "h-[300px]"
                : images.length === 2
                  ? "h-[250px]"
                  : "h-[250px]"
            } object-cover object-center w-full`}
            height={images.length === 1 ? 600 : 300}
            src={image}
            width={500}
          />
        </Link>
      ))}
    </LightGallery>
  );
};

export default ImageGallery;
