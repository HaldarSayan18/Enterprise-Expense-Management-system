// import logo from './logo.svg';
import './components/assets/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';

const App = () => {
    return (
        <> <Router>
            <Routes>
                <Route path='/register' element={<Registration />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
        </>

    );
}

export default App;
