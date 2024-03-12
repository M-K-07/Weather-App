import error from "../assets/404.png";
import "./animation.css"
function Error() {
  return (
    <div>
      <div className="err_img mr-4 animate-fade">
        <img src={error} alt="" className="contrast-[150%]"/>
      </div>
      <div className="err_msg animate-fade">
        <p className="text-3xl font-bold pb-7 text-neutral-200">Invalid City Name</p>
      </div>
    </div>
  );
}

export default Error;
