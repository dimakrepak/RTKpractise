import { useEffect } from "react";
import "./App.css";
import { Post } from "./components/Post";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { userSlice } from "./store/reducers/UserSlice";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      {/* {isLoading && "Loading..."}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users)} */}
      <Post />
    </>
  );
}

export default App;
