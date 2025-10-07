import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Email, Folder } from './types';
import { Sidebar } from './Components/Sidebar';
import { EmailList } from './Components/EmailList';
import { EmailViewer } from './Components/EmailViewer';
import { HotkeysProvider } from './Components/HotkeysProvider';
import { EmailProvider } from './context';

const queryClient = new QueryClient();

const App = () => {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<Folder>('inbox');
  return (
    <QueryClientProvider client={queryClient}>
      <EmailProvider selectedFolder={selectedFolder}>
        <HotkeysProvider setSelectedFolder={setSelectedFolder} setSelectedEmail={setSelectedEmail}>
          <div className="grid grid-cols-[10%_90%] h-[100vh]">
            <Sidebar selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} />
            <div className="relative">
              <EmailList setSelectedEmail={setSelectedEmail} />
              {selectedEmail && <EmailViewer selectedEmail={selectedEmail} onBack={() => setSelectedEmail(null)} />}
            </div>
          </div>
        </HotkeysProvider>
      </EmailProvider>
    </QueryClientProvider>
  );
};

export default App;
