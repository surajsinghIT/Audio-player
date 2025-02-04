import React from 'react';
import './Shimmer.css'; // Import the CSS for shimmer effect

const ShimmerScreen = ({ type }) => {
    return (
        <div className="shimmer-wrapper">
            {type === 'image' && <div className="shimmer shimmer-image"></div>}
            {type === 'text' && <div className="shimmer shimmer-text"></div>}
        </div>
    );
};

export default ShimmerScreen;
