import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="Inter.">
      About
      <Image
        src={
          "https://images.pexels.com/photos/33289738/pexels-photo-33289738.jpeg"
        }
        width={200}
        height={200}
        alt="vercel"
      />
    </div>
  );
};

export default About;
