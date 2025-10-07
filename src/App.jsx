import { useEffect } from 'react';
import { Sidebar } from './Components/Sidebar';
// import { EmailList } from './Components/EmailList';
import { EmailViewer } from './Components/EmailViewer';

const App = () => {
  useEffect(() => {
    fetch('/api/emails')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }, []);
  
  return (
    <div className="grid grid-cols-[10%_50%_40%] h-[100vh]">
      <Sidebar />
      {/* <EmailList /> */}
      <EmailViewer />
    </div>
)}

export default App
