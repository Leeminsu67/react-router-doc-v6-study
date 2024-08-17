import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

const Followers = () => {
  // Outlet context 받는법
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  console.log(nameOfMyUser);
  return <h1>Here are {nameOfMyUser}의 followers</h1>;
};

export default Followers;
