import React from "react";

import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader width={400} height={800}>
    <rect x="90" y="8" rx="3" ry="3" width="150" height="15" />
    <rect x="90" y="30" rx="3" ry="3" width="100" height="15" />
    <rect x="90" y="50" rx="3" ry="3" width="130" height="15" />
    <rect x="0" y="90" rx="3" ry="3" width="250" height="15" />
    <rect x="0" y="110" rx="3" ry="3" width="300" height="15" />
    <rect x="0" y="130" rx="3" ry="3" width="350" height="15" />
    <rect x="0" y="150" rx="3" ry="3" width="150" height="15" />

    <circle cx="40" cy="40" r="40" />
  </ContentLoader>
);

export default MyLoader;
