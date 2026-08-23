import './globals.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <h1>Welcome to EventHub</h1>
        <p>Your event management platform</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;