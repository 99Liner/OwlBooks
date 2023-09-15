import React from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button type="button" onClick={()=>{navigate("/")}}>Home Page</button>
            
            <h1>
                Dashboard
            </h1>

            <p>
                This is the dashboard page.
            </p>
        </div>
    );
}

export default Dashboard;