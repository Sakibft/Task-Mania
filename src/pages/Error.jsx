import { Link } from "react-router-dom";

import img from "../../src/assets/error.gif";

const Error = () => {
  return (
    <div>
      <div className="w-full min-h-screen justify-center items-center flex flex-col gap-2">
        <img className="w-[50%] rounded-xl" src={img} alt="" />
        <Link to="/">
          <button className="border-2 border-sky-500 text-sky-400 p-2 font-bold rounded-lg">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
