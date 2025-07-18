import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import BackButton from './BackButton';

const NavigationBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const goHome = () => {
    navigate('/dashboard');
  };

  return (
    <div className="nav-bar">
      <h1>NutriTrace</h1>
      <div className="nav-buttons">
        <button className="nav-btn" onClick={goHome}>Home</button>
        <button className="nav-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavigationBar />
      
      {/* Main Dashboard Content */}
      <div className="dashboard-container">
        
        <div className="dashboard-header">
          <h2>Admin Dashboard</h2>
          <p>Manage your products and QR codes</p>
        </div>
        <div className="dashboard-options">
        <div className="feature-block">
            <h3>Add Product & Generate QR</h3>
            <p>Add and generate new products to your inventory with details like id, name, ingredients, and pricing etc</p>
            <button className="feature-btn" onClick={() => navigate('/generate-qr')}>
              Generate QR
            </button>
          </div>

          <div className="feature-block">
            <h3>Remove Product</h3>
            <p>Remove products from your inventory using their unique product ID.</p>
            <button className="feature-btn" onClick={() => navigate('/remove-product')}>
              Remove Product
            </button>
          </div>

          <div className="feature-block">
            <h3>Adjust Pricing</h3>
            <p>Update product prices in your inventory to reflect current market rates.</p>
            <button className="feature-btn" onClick={() => navigate('/adjust-pricing')}>
              Adjust Pricing
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
export { NavigationBar };
