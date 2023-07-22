import UserContext from './userContext';
import { useState , useEffect} from 'react';
import { Card } from './Card';

function App() {
  const [user, setUser] = useState('');

  // do your auth here and set the user for the application
  useEffect(() => {
    setUser('Gaurav')
  }, [user]);
  
  return (
    <UserContext.Provider value={user}>
    <div className="App">
    Hello {user} from the App component;
    </div>
    <Card></Card>
    </UserContext.Provider>
  );
}

export default App;
