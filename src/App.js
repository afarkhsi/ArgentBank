import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/home';
import SignIn from './pages/signIn';
import UserPage from './pages/user';
import Footer from './components/Footer/Footer';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={<UserPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
