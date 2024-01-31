import React from "react";

const MainLogo = () => {
  return (
    <>
      <svg
        width="70"
        height="60"
        viewBox="0 0 70 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="70" height="60" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_1_11"
              transform="matrix(0.00384369 0 0 0.0044843 -0.00928892 0)"
            />
          </pattern>
          <image
            id="image0_1_11"
            width="265"
            height="223"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </>
  );
};

export default MainLogo;