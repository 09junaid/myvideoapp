import React from 'react';
import VideoCall from './VideoCall';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-[#f0f1ff] min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/room/:roomid" element={<VideoCall />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;