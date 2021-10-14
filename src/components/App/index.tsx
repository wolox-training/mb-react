import { QueryClientProvider, QueryClient } from 'react-query';

import CustomRouter from 'components/CustomRouter';
import 'scss/application.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomRouter />
    </QueryClientProvider>
  );
}

export default App;
