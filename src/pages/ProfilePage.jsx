import { ProfileDetails } from "../components/ProfileDetails";
import ProfileContent from '../components/Images/ProfileContent.png';
import "./ProfilePage.css";

export const ProfilePage = () => {
  return (
    <>
      <ProfileDetails />
      <div className="ProfileContainer">
      <img className="ProfileContent" src={ProfileContent}/>
      </div>
      

    </>
  );
};
