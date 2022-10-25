
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      setPosts(data);
    })
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value)
    console.log(event.target.value)
  }


  return (
    <div className="App">

    <input onChange={handleInputChange}/>

    {posts
    .filter((post) => {
      return post.title.indexOf(inputValue) >= 0
    })
    .map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}

    </div>
  );
}

export default App;
