import React from "react";
import TypewriterComponent from "typewriter-effect";
const TextAnimation = () => {
  return (
    <div className="text-4xl">
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter
            .typeString("   Welcome To Your SKIT Alumni Website ")
            .pauseFor(3000)
            .deleteAll()
            .typeString("   Please Register Yourself for more updates ! ")
            .pauseFor(3000)
            .start();
        }}
      />
    </div>
  );
};

export default TextAnimation;
