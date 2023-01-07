import React from "react";

const Card = () => {
  return (
    <div className="w-[400px] bg-white p-3 rounded-2xl shadow dark:bg-slate-900">
      <div className="card-image h-[250px] mb-5">
        <img
          src="https://i.pinimg.com/564x/9f/0d/b5/9f0db576dc6547dfff159fa5c989838b.jpg"
          alt=""
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="card-content">
        <h1 className="font-bold">3 ways to get free tickets to travel the word</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          voluptatum vitae tempore, minima velit obcaecati ipsum nostrum veniam
          iste consequatur numquam, amet culpa sapiente quos facere veritatis
          omnis nam assumenda!
        </p>
      </div>
      <div className="card-btn">
        <button className="bg-sky-400 p-3 w-full">Explore</button>
      </div>
    </div>
  );
};

export default Card;
