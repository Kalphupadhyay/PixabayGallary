import React from "react";

const imageCard = (props) => {
  const tags = props.image.tags.split(","); 
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={props.image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="text-xl text-blue-600 font-bold mb-2">
          Photo by {props.user}
        </div>
        <ul>
          <li>
            <strong>Views:{props.views}</strong>
          </li>
          <li>
            <strong>Downloads:{props.download}</strong>
          </li>
          <li>
            <strong>Likes:{props.likes}</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="inline-block rounded-full px-3 py-1 bg-gray-200 font-semibold text-gray-700 mr-2 my-1 "
            >
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default imageCard;
