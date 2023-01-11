import React from "react";

interface Props {
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const BtnPost: React.FC<Props> = ({ handleClick }) => {
  return (
    <button
      className="rounded-md bg-blue-400 px-5 py-1 text-sm font-bold text-slate-600 shadow-md hover:bg-blue-200 btn__post"
      onClick={handleClick}
    >
      Post
    </button>
  );
};

export default BtnPost;