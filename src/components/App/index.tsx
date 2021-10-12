import { QueryClientProvider, QueryClient } from 'react-query';

import ProtectedRoutes from 'components/ProtectedRoutes';
import 'scss/application.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProtectedRoutes />
    </QueryClientProvider>
  );
}

export default App;
