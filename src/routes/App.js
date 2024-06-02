import {ClickProvider} from '../conponents/HomeCom/contexts/ClickContext';
import Router from '../conponents/Router';

function App() {
  return (
    <ClickProvider>
      <Router />
    </ClickProvider>
  );
}

export default App;

