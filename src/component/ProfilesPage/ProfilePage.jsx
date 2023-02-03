import React, { useContext } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import { images, data } from "../../constants";

import { NetflixContext } from "../../App";

import "./ProfilePage.css";

const UserCard = ({ user: { name, img, id } }) => {
  const { onHandleUserSelect } = useContext(NetflixContext);

  return (
    <div className="app__profiles-users_list">
      <img src={img} alt="user 1" onClick={() => onHandleUserSelect(id)} />
      <p className="p__opensans">{name}</p>
    </div>
  );
};

export default function ProfilePage() {
  return (
    <div className="app__profiles">
      <div className="app__profile-netflix-logo">
        <img src={images.netflix} alt="netflix logo" />
      </div>
      <h1 className="headtext__opensans profile-title">Who is watching?</h1>

      <div className="app__profiles-users">
        {data.sampleUsers.map((user) => {
          return <UserCard user={user} key={user.id} />;
        })}
        <div className="app__profiles-users_list">
          <MdOutlineAddCircle color="#6D6D6E" />
          <p className="p__opensans"></p>
        </div>
      </div>

      <div className="app__profiles-button">
        <button className="button profile__button">Manage Profiles</button>
      </div>
    </div>
  );
}
