// import logo from './logo.svg';
import './components/assets/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import DashboardPage from './components/pages/DashboardPage';
import Expenses from './components/pages/Expenses';
import Budget from './components/pages/Budget';
import Invoice from './components/pages/Invoice';

const App = () => {
    return (
        <> <Router>
            <Routes>
                <Route path='/' element={<Registration />} />
                <Route path='/login' element={<Login />} />
                <Route path='/main' element={<Home />}>
                    <Route
                        path="profile"
                        element={<Profile />}
                    />
                    <Route
                        path="dashboard"
                        element={<DashboardPage />}
                    />
                    <Route
                        path="expenses"
                        element={<Expenses />}
                    />
                    <Route
                        path="budget"
                        element={<Budget />}
                    />
                    <Route
                        path="invoice"
                        element={<Invoice />}
                    />
                </Route>
                {/* <Route path='/profile' element={<Profile />} /> */}
            </Routes>
        </Router>
        </>

    );
}

export default App;
