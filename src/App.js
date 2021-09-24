import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const blogStyles = {
    backgroundColor: 'skyblue',
    padding: '20px',
    margin: '20px',
    border: '3px solid blue',
    borderRadius: '10px'

  }
  return (
    <div className="App">
      <Mobile></Mobile>
      <Todo></Todo>
    </div>
  );
}

function Todo(){
  const [users, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  return (
    <div>
      {
        users.map(user => <User title={user.title} ></User>)
      }
    </div>
  );
}

function User(props){
  return(
    <div>
      <h2>Todo Title: {props.title}</h2>
    </div>
  );
}

function Mobile(){
  const [count, setCount] = useState(100);
  const batteryDown = () => {
    if(count !== 0){
      const newCount = count - 10
      setCount(newCount)
    }
  }
  return (
    <div>
      <h2>Battery: {count} </h2>
      <button onClick={batteryDown}>Battery Down</button>
    </div>
  );
}

function Blog(){
  return (
    <div>
      <h2>Blog heading:</h2>
      <h4>Blog Author:</h4>
    </div>
    
  );
}

/* 
<article style={blogStyles}>
        <h2 style={{backgroundColor: 'magenta', color: 'yellow', padding: '10px', borderRadius: '10px'}}>Special 420 Blog</h2>
        <p className="para">When you choose to blog using a hosted blog service, you don’t need to worry about the software technology at all. You can concentrate on the topic for your next blog post, rather than on how to configure a web server. To use hosted blogging software, you log into the editing tool, write a post, click the Publish button, and log out.</p>
      </article>
*/

export default App;
