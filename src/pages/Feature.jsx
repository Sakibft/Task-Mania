import imag from "../../src/assets/marketing.png";
import imag2 from "../../src/assets/salary.png";
import clipboard from "../../src/assets/clipboard.png";
import lock from "../../src/assets/protection.png";
import notification from "../../src/assets/notification.png";
import trophy from "../../src/assets/trophy.png";
import customer from "../../src/assets/customer-service.png";
import computer from "../../src/assets/computer.png";
import check from "../../src/assets/check.png";
const Feature = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Feature</h1>

      {/* container 1  */}
      <div className="flex justify-center items-center ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
          {/*  */}
          <div className="card w-80 mb-4 bg-base-200 border shadow-xl">
            <div className="flex  p-4 justify-between  items-center  gap-x-4">
              <img className="w-20" src={imag2} alt="" />
              <div>
                <h1 className="font-bold">Earn Coins</h1>
                <p>Complete simple tasks and earn coins for your efforts.</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="card w-80 mb-4 bg-base-200 border shadow-xl">
            <div className="flex  p-4 justify-between items-center gap-x-4 ">
              <img className="w-20" src={clipboard} alt="" />
              <div>
                <h1 className="font-bold">Create Tasks</h1>
                <p> Easily create and manage tasks with detailed instructions, deadlines, and reward amounts.</p>
              </div>
            </div>
          </div>
          {/* trophy */}
          <div className="card w-80 mb-4 bg-base-200 border shadow-xl">
            <div className="flex  p-4 justify-between  items-center  gap-x-4 ">
              <img className="w-20" src={trophy} alt="" />
              <div>
                <h1 className="font-bold">Top Earners</h1>
                <p>Get inspired by the top earners on the platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* container 2 */}
      <div className="flex justify-center items-center ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8 ">
          {/* task */}
          <div className="card w-80 mb-4 bg-base-200 border shadow-xl">
            <div className="flex  p-4 justify-between  items-center  gap-x-4 ">
              <img className="w-20" src={imag} alt="" />
              <div>
                <h1 className="font-bold">Task Categories</h1>
                <p>
                  Choose from various task categories that match your skills.
                </p>
              </div>
            </div>
          </div>
          {/* notification */}
          <div className="card w-80 mb-4 bg-base-200 border shadow-xl">
            <div className="flex  p-4 justify-between  items-center  gap-x-4 ">
              <img className="w-20" src={notification} alt="" />
              <div>
                <h1 className="font-bold"> Notifications</h1>
                <p>
                  Stay updated with real-time notifications for task updates.
                </p>
              </div>
            </div>
          </div>

          {/* secure*/}
          <div className="card w-80 mb-4 bg-base-200 border shadow-xl">
            <div className="flex  p-4 justify-between  items-center  gap-x-4 ">
              <img className="w-20" src={lock} alt="" />
              <div>
                <h1 className="font-bold">Secure Payments</h1>
                <p>Withdraw your earnings through secure payment methods.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Container 3 */}
      <div className="flex justify-center items-center ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8 ">
          {/* support*/}
          <div className="card w-80 mb-4 bg-base-200 border shadow-xl">
            <div className="flex  p-4 justify-between items-center gap-x-4 ">
              <img className="w-20" src={customer} alt="" />
              <div>
                <h1 className="font-bold">Support</h1>
                <p>
                Access reliable support for any queries or issues.
                </p>
              </div>
            </div>
          </div>
           {/* secure*/}
           <div className="card w-80 mb-4 bg-base-200 border shadow-xl">
            <div className="flex  p-4 justify-between items-center gap-x-4 ">
              <img className="w-20" src={check} alt="" />
              <div>
                <h1 className="font-bold">Secure Payments</h1>
                <p>Withdraw your earnings through secure payment methods.</p>
              </div>
            </div>
          </div>
          {/* COMPUTER */}
          <div className="card w-80 mb-4 bg-base-200 border shadow-xl">
            <div className="flex  p-4 justify-between items-center gap-x-4 ">
              <img className="w-20" src={computer} alt="" />
              <div>
                <h1 className="font-bold"> User Interface</h1>
                <p>
                Navigate easily with our intuitive and user-friendly interface.
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Feature;
