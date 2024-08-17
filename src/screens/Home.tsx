import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

const Home = () => {
  // http://localhost:3000/?fav=yes&geo=123&mething=true
  // const [readSearchParams, setSearchParams] = useSearchParams();
  // console.log(readSearchParams.has("geo"));
  // console.log(readSearchParams.get("geo"));
  // 뒤에 파라미터들을 재정의 할 수 있다.
  // setTimeout(() => {
  //   setSearchParams({
  //     day: "today",
  //     tomorrow: "123",
  //   });
  // }, 3000);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
