import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Folder } from './types';
import { Sidebar } from './components/Sidebar';
import { EmailList } from './components/EmailList';
import { EmailViewer } from './components/EmailViewer';
import { HotkeysProvider } from './components/HotkeysProvider';
import { EmailProvider } from './context';

const queryClient = new QueryClient();

const App = () => {
  const [selectedEmailId, setSelectedEmailId] = useState<number | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<Folder>('inbox');
  return (
    <QueryClientProvider client={queryClient}>
      <EmailProvider selectedFolder={selectedFolder} selectedEmailId={selectedEmailId}>
        <HotkeysProvider setSelectedFolder={setSelectedFolder} setSelectedEmailId={setSelectedEmailId}>
          <div className="grid grid-cols-[10%_90%] h-[100vh]">
            <Sidebar selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} />
            <div className="relative">
              <EmailList setSelectedEmailId={setSelectedEmailId} />
              {selectedEmailId && <EmailViewer onBack={() => setSelectedEmailId(null)} />}
            </div>
          </div>
        </HotkeysProvider>
      </EmailProvider>
    </QueryClientProvider>
  );
};

export default App;
