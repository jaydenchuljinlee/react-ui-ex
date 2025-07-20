import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frame from './frame/Frame';
import LoginPage from './login/LoginPage';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* Frame으로 감싸는 일반 페이지 */}
        <Route
          path="/*"
          element={
            <Frame>
              <Routes>
                {/* <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<NotFoundPage />} /> */}
              </Routes>
            </Frame>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
