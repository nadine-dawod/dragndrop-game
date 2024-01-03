import "./ProfilePage.css";
import { Welcome } from "../components/profile/Welcome";
import { ProfileDetails } from "../components/profile/ProfileDetails";

export const ProfilePage = () => {
  return (
    <>
      <Welcome />
      <ProfileDetails />
    </>
  );
};
