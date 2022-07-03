import "./Card.css";
import Photo from "./photo";
import UserProfile from "./user-profile";
import ProfileInfo from "../data/profileInfo";

const card = () => {
  const saveFunFactHandler = (enteredFunFactData) => {
    const funFactData = {
      ...enteredFunFactData,
      id: Math.random().toString(),
    };
    console.log(funFactData);
    console.log("printed from Card.jsx file");
  };

  return (
    <div className="card">
      <div className="left-section">
        <Photo />
      </div>
      <div className="right-section">
        <UserProfile
          details={ProfileInfo}
          onSaveFunFactData={saveFunFactHandler}
        />
      </div>
    </div>
  );
};
export default card;
