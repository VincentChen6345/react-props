import "./Card.css";
import Photo from "./photo";
import UserProfile from "./user-profile";
import ProfileInfo from "../data/profileInfo";

const card = () => {
  return (
    <div className="card">
      <div className="left-section">
        <Photo />
      </div>
      <div className="right-section">
        <UserProfile details={ProfileInfo} />
      </div>
    </div>
  );
};
export default card;
