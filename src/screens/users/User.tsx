import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { users } from "../../db";

const User = () => {
  console.log(useOutletContext());
  // userId가져오기
  const { userId } = useParams();
  return (
    <>
      <h1>
        User with it {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      {/* <Link to={`/users/${userId}/followers`}>See followers</Link> */}
      {/* 상대경로로 추가하는법 */}
      <Link to={`followers`}>See followers</Link>
      {/* 이 컴포넌트에 자식이 있을경우 바로 Outlet이 사용되는 경우다 */}
      <Outlet context={{ nameOfMyUser: users[Number(userId) - 1].name }} />
    </>
  );
};

export default User;
