import React from 'react';
import AboutSingle from './AboutSingle';

const About = () => {
    const teammates = [
        {
          id: 1,
          email: "mafujul15-3076@diu.edu.bd",
          name: "Mafujul Haque Plabon",
          image: "https://i.ibb.co/Bqk1V2Y/image.png",
          number:"01908337732"
        },
        {
          id: 2,
          email: "bariul15-3314@diu.edu.bd",
          name: "Md. Bariul Munshi",
          image:"https://i.ibb.co/DGngS0V/image.png",
        },
        {
          id: 3,
          email: "bithi15-3738@diu.edu.bd",
          name: "Hosne Ara Bithi",
          image: "https://i.ibb.co/CQ2dHJ2/image.png"
        },
        {
          id: 4,
          email: "sadia15-3678@diu.edu.bd",
          name: "Sadia Rahaman",
          image: "https://i.ibb.co/T8ZkNTx/image.png"
        },
        {
          id: 4,
          email: "alifa15-3639@diu.edu.bd",
          name: "Alifa Akhi",
          image: "https://i.ibb.co/XyKntxV/image.png"
        },
      ];
    return (
        <div className="grid grid-cols-1 mt-20 lg:grid-cols-4 gap-x-5 gap-y-20 px-5 lg:px-36 my-10">
        {teammates.map((teammate) => (
          <AboutSingle key={teammate.id} teammate={teammate} />
        ))}
      </div>
    );
};

export default About;