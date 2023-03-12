import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Name from './Components/Name';
import { User } from './typeComponent';

function App() {
  const [count, setCount] = useState(0);

  const user: User = useMemo(() => {
    return {
      user: ['Синькевичь', 'Круглый', 'Лысенко', 'Малько'],
      date: new Date(),
      district: []
    };
  }, []);

  let ar = user.user
  console.log(Array.isArray( ar));

  const [currentTime, setCurrentTime] = useState(user.date.toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());

      setCount(() => (count + 1) % user.user.length)
    }, 1000)
    return () => {
      clearInterval(intervalId);
    };
  }, [user.user.length, count]);

  return (
    <div className="App">
      <div>1</div>
      <div className="idiv"></div>
      <i>{currentTime}</i>
      <p>{user.user[count]}</p>
      <Name user={ar} />
    </div>
  );
}

export default App;
