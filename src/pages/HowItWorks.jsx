import { Link } from "react-router-dom";
import register from "../../src/assets/register.svg";
import task from "../../src/assets/task2.svg";
import reword from "../../src/assets/reword.svg";
const HowItWorks = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 mt-10">
        How it Works ?{" "}
      </h1>
      {/* Register */}
      <div>
        <div className=" md:flex justify-around items-center lg:flex-row w-full">
          {/* left */}
          <div className="p-2 md:w-1/2">
            <img src={register} />
          </div>
          {/* Right */}
          <div className="  md:w-1/2">
            <div className="p-6 md:mt-[10%] md:mb-[10%]">
              <h1 className="font-bold text-2xl mb-3">
                Want to get 10 coin free?
              </h1>
              <p>
                Create an account on our platform by signing up with your email
                or using Google Login. Choose your role as a Worker or
                Task-Creator, and start your journey with us. Workers get 10
                coins upon registration, while Task-Creators receive 50 coins.
              </p>
              <Link to="/register">
                <button className="btn mt-4">Sign Up Now ! </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Complete Tasks */}
      <div>
        <div className="md:flex justify-around items-center w-full">
          {/* left */}
          <div className="p-2 md:w-1/2">
            <div className="p-6 md:mt-[10%] md:mb-[10%]">
              <h1 className="font-bold text-2xl mb-3">Complete Tasks</h1>
              <p>
                Browse through the available tasks posted by Task-Creators.
                Select tasks that match your skills and complete them as per the
                given instructions. Submit your completed tasks for review to
                earn rewards.
              </p>
              <Link to="/register">
                <button className="btn mt-4">Get Start ! </button>
              </Link>
            </div>
          </div>
          {/* Right */}
          <div className="  md:w-1/2 border ">
            <img className="w-[80%]" src={task} />
          </div>
        </div>
      </div>
      {/* Rewords */}
      <div>
        <div className=" md:flex justify-around items-center lg:flex-row w-full">
          {/* left */}
          <div className="p-2 md:w-1/2">
            <img src={reword} />
          </div>
          {/* Right */}
          <div className="  md:w-1/2">
            <div className="p-6 md:mt-[10%] md:mb-[10%]">
              <h1 className="font-bold text-2xl mb-3">Earn Rewards </h1>
              <p>
                Get your completed tasks approved by Task-Creators and earn
                coins as rewards. Accumulate coins and withdraw them as real
                money. The more tasks you complete, the more you earn!
              </p>
              <Link to="/register">
                <button className="btn mt-4">Join now! </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
