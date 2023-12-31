import React from 'react';

const AboutSingle = ({teammate}) => {
    const {
        email,
        image,
        name,
        number
      } = teammate;
    return (
        <div>
            <div className="review-card relative bg-white p-5 flex flex-col items-baseline hover:shadow-2xl transition-all duration-300 rounded-3xl">
          <div className="flex w-full justify-center items-center">
            <div className="review-card-image w-1/4 border-2 border-gray-400 absolute left-[50%] bottom-[100%] translate-y-1/2 -translate-x-1/2">
              <img
                className="image w-full border-2 border-white"
                src={image}
                alt=""
              />
            </div>
            <div className="flex mt-[10%] flex-col justify-center pl-3">
              <span className="text-center font-semibold">{name}</span>
              <span className="text-center text-xs">{email}</span>
              <span className="text-center text-xs">Contact:{number}</span>
            </div>
          </div>      
        </div>
        </div>
    );
};

export default AboutSingle;