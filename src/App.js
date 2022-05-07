import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const ref = useRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => setUsers(data));
  }, []);

  //検索機能の追加
  const handleSearch = () => {
    console.log(ref.current.value);

    //フィルタリング機能
    setSearchQuery(
      users.filter((user) =>
        user.name.toLowerCase().includes(ref.current.value)
      )
    );

    console.log(searchQuery);
  };

  return (
    <div className="App">
      <div className="main">
        <h2>検索アプリ</h2>
        <input type="text" ref={ref} onChange={() => handleSearch()} />
        <div className="content">
          {searchQuery.map((user) => (
            <div className="box" key={user.id}>
              <h3>{user.name}</h3>
              <hr />
              <p>{user.email}</p>
            </div>
          ))}
          {/* <div className="box">
            <h3>ユーザー名</h3>
            <hr />
            <p>メールアドレス</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
