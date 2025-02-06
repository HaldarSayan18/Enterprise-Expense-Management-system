// import logo from './logo.svg';
import './components/assets/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Login from './components/pages/Login';

const App = () => {
    return (
        <> <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
            </Routes>
        </Router>
        </>

    );
}

export default App;
