import { useState, useEffect } from "react";
import { GetPosts, RandomUser } from "./api";
import PostCard from "./components/postcard";
import UserCard from "./components/usercard";
import { Route, Switch } from 'react-router-dom';
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    GetPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    RandomUser().then((user) => setuserData(user));
  }, []);

  return (
    <div className="App">
      {userData &&<UserCard data={userData} />}
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}

export default App;
