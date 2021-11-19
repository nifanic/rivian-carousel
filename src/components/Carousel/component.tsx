import { FC, MouseEventHandler, useState } from "react";

interface CarouselProps {
  images: string[];
}

export const Carousel: FC<CarouselProps> = (props) => {
  const { images } = props;

  const [imageIndex, setImageIndex] = useState(0);
  const { length: IMAGES_NUMBER } = images;
  /** Number of images shown in carousel at a time */
  const IMAGES_SHOWN = 3;
  /** Offset */
  const end = imageIndex + IMAGES_SHOWN;
  /** Array of images shown in carousel at a time */
  const carouselImages = images.slice(imageIndex, end);

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { name } = e.currentTarget;

    switch (name) {
      case "prev": {
        const decrement =
          (imageIndex === 0 && IMAGES_NUMBER - 1) || imageIndex - 1;
        return setImageIndex(decrement);
      }
      case "next": {
        const increment = (imageIndex + 1) % IMAGES_NUMBER;
        return setImageIndex(increment);
      }
      default:
        return imageIndex;
    }
  };

  if (end > IMAGES_NUMBER) {
    carouselImages.push(...images.slice(0, end - IMAGES_NUMBER));
  }

  return (
    <>
      <button type="button" name="prev" onClick={onClick}>
        Prev
      </button>
      <ul id="carousel">
        {carouselImages.map((image) => (
          <li>
            <img src={image} alt={image} />
          </li>
        ))}
      </ul>
      <button type="button" name="next" onClick={onClick}>
        Next
      </button>
    </>
  );
};
