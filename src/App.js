import './App.css';
import { useTranslation } from 'react-i18next';
import About from './pages/About';
import Service from './pages/Service';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <h1>{t('homePage.hero.mainTitle')}</h1>
      <About />
      <Service />
    </div>
  );
}

export default App;
