import ProfilePhoto from "../data/portrait.jpeg";
import "./photo.css";
const Photo = () => {
  return (
    <div className="img-div">
      <img src={ProfilePhoto} alt="profile" className="profilePhoto" />
    </div>
  );
};
export default Photo;
