import { QueryClientProvider, QueryClient } from 'react-query';

import api from 'config/api';
import LocalStorageService from 'services/LocalStorageService';
import CustomRouter from 'components/CustomRouter';

import 'scss/application.scss';

const queryClient = new QueryClient();

api.setHeaders({
  'access-token': LocalStorageService.getValue('access-token'),
  client: LocalStorageService.getValue('client'),
  uid: LocalStorageService.getValue('uid')
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomRouter />
    </QueryClientProvider>
  );
}

export default App;
