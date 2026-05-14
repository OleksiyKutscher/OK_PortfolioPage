import { Suspense, lazy } from 'react';

// Die eigentliche Seite wird asynchron geladen
const MainContent = lazy(() => import('./components/MainContent.jsx'));
// Deine Ladeseite
import LoadingScreen from './components/LoadingScreen.jsx';


function App() {

  return (

    <Suspense fallback={<LoadingScreen />}>
      <MainContent />
    </Suspense>

  )
}

export default App
