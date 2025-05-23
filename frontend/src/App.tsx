import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MainAppPage from './components/MainAppPage';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider> {/* Wrap Router with AuthProvider */}
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <MainAppPage />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
