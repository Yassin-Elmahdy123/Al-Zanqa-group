import React from "react";

export default function Card(props) {
  return (
    <div className="mt-10 everything-card">

      {/* ORIGINAL CARD CONTENT */}
      <div className="flex-wrap gap-1 p-5 mb-1 everything-card">
        <b className="title">{props.title}</b>

        <div className="mx-auto everything-card-img">
          <img className="everything-card-img" src={props.imgUrl} alt="img" />
        </div>
      </div>

      <div className="description">
        <p className="leading-7 description-text">
          {props.description?.substring(0, 200)}
        </p>
      </div>

      <div className="info">
        <div className="flex items-center gap-2 source-info">
          <span className="font-semibold">Source:</span>
          <a
            href={props.url}
            target="_blank"
            className="underline break-words link"
          >
            {props.source?.substring(0, 70)}
          </a>
        </div>

        <div className="flex flex-col origin">
          <p className="origin-item">
            <span className="font-semibold">Author:</span> {props.author}
          </p>

          <p className="origin-item">
            <span className="font-semibold">Published At:</span>{" "}
            {props.publishedAt}
          </p>
        </div>
      </div>

      {/* NEW CARD CONTENT */}
      <div className="flex mt-5 lg:flex-row">

        {/* Left Image */}
        <div
          className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
          style={{ backgroundImage: `url(${props.imageUrlLeft})` }}
          title={props.imageLeftTitle}
        ></div>

        {/* Right Section */}
        <div className="flex flex-col justify-between p-4 leading-normal border border-b lg:rounded-b-none lg:rounded-r">

          {/* Member Info */}
          <div className="mb-8">
            <p className="flex items-center text-sm text-gray-600">
              {props.memberIcon && (
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  {props.memberIcon}
                </svg>
              )}
              {props.memberText}
            </p>

            {/* Title */}
            <div className="mb-2 text-xl font-bold text-gray-900">
              {props.cardTitle}
            </div>

            {/* Description */}
            <p className="text-base text-gray-700">
              {props.cardDescription}
            </p>
          </div>

          {/* Author Section */}
          <div className="flex items-center">
            {props.authorImage && (
              <img
                className="w-10 h-10 mr-4 rounded-full"
                src={props.authorImage}
                alt="Avatar"
              />
            )}

            <div className="text-sm">
              <p className="leading-none text-gray-900">{props.authorName}</p>
              <p className="text-gray-600">{props.publishedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}