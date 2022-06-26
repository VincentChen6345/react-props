import profilePhoto from "../data/portrait.jpeg";
import "./photo.css";
const Photo = () => {
  return (
    <div className="img-div">
      <img
        src={profilePhoto}
        alt="profile photo"
        className="profilePhoto"
      ></img>
    </div>
  );
};
export default Photo;