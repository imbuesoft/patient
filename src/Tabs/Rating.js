import React from 'react';

const Rating = (props) => {

  const fullStars = Math.floor(props.value);
  const hasHalfStar = props.value % 1 !== 0;
  const emptyStars = 5 - Math.ceil(props.value);
  const renderStars = () => {
   const stars = [];
    if(props.value<=5 && props.value>=0){
      for (let i = 0; i < fullStars; i++)
        stars.push(<i class="me-1 bi bi-star-fill"></i>);

      if (hasHalfStar)
        stars.push(<i class="me-1 bi bi-star-half"></i>);

      for (let i = 0; i < emptyStars; i++)
        stars.push(<i class="me-1 bi bi-star"></i>);
    }
    return stars;
  };

  return (
    <>
      {renderStars()}
    </>
  );
};

export default Rating;
