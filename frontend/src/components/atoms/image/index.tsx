import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  style?: object;
  className?: string;
};

const Image = (props: ImageProps) => {
  return (
    <img
      data-testid="Image"
      src={props.src}
      alt={props.alt}
      style={props.style}
      className={props.className}
    />
  );
};
export default Image;
