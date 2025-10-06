import { Sidebar } from './Components/Sidebar';
import { EmailList } from './Components/EmailList';
import { EmailViewer } from './Components/EmailViewer';

const App = () => (
    <div className="grid grid-cols-[10%_50%_40%] h-[100vh]">
      <Sidebar />
      <EmailList />
      <EmailViewer />
    </div>
)

export default App
