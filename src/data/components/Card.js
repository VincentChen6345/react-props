import "./Card.css";
import Photo from "./photo";
import UserProfile from "./user-profile";
import profileInfo from "../data/profileInfo";

const card = () => {
  return (
    <div className="card">
      <div className="left-section">
        <Photo></Photo>
      </div>
      <div className="right-section">
        <UserProfile details={profileInfo}></UserProfile>
      </div>
    </div>
  );
};
export default card;
