import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register, Landing, Error } from './pages';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
