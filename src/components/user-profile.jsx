import "./user-profile.css";
import React, { useState } from "react";

const UserProfile = (props) => {
  ///////////////
  //////Variables
  let height = props.details.height;
  let job = props.details.job;
  let language = props.details.language;
  let favouriteFood = props.details["Favourite Food"];
  /////////////
  ///// state variables
  let [age, setAge] = useState(props.details.age);
  const increaseAge = () => {
    setAge((age += 1));
  };
  const decreaseAge = () => {
    setAge((age -= 1));
  };
  let [name, setName] = useState(props.details.name);
  const chineseName = () => {
    setName("陈翔");
  };
  const englishName = () => {
    setName("Vincent Chen");
  };
  ///////////////////////////////////
  //////FORM INPUT
  const [funFact, setFunFact] = useState("");
  const funFactChangeHandler = (e) => {
    setFunFact(e.target.value);
  };
  //////////////////////////////////
  //////Button submit handler//////
  const submitHandler = (e) => {
    e.preventDefault(); //prevents page from reloading
    const funFactData = {
      text: funFact,
    };
    props.onSaveFunFactData(funFactData);
    setFunFact("");
  };

  return (
    <div className="profile-section">
      <h1 className="heading-1"> Profile</h1>
      <ul className="detail">
        <li className="detail__item">
          Name: {name} <button onClick={chineseName}>Chinese</button>
          <button onClick={englishName}>English</button>
        </li>
        <li className="detail__item">
          Age:{age} <button onClick={increaseAge}>+</button>
          <button onClick={decreaseAge}>-</button>
        </li>

        <li className="detail__item">Height:{height}</li>
        <li className="detail__item">Job:{job}</li>
        <li className="detail__item">Language:{language}</li>
        <li className="detail__item">Favourite Food:{favouriteFood}</li>
        <li className="detail__item-form">
          <form onSubmit={submitHandler} className="form-input">
            <input
              type="text"
              onChange={funFactChangeHandler}
              placeholder="Add a fun fact!"
              className="input"
              value={funFact}
            />
            <button type="submit">Add</button>
          </form>
        </li>
      </ul>
    </div>
  );
};
export default UserProfile;
