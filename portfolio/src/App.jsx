import Root from "./pages/Root"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
