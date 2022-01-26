import { useEffect } from 'react';
import Landing from './components/Landing';
import Details from './components/Details';
import { getConcertInfo } from './store/actions';
import store from './store';
import Loading from './components/Loading';
import Footer from './components/Footer';

function App() {
  const loading = store((state) => state.loading);

  useEffect(() => {
    getConcertInfo();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-black">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full bg-black">
      <Landing />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
