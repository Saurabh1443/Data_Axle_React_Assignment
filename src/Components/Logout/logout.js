import React from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    
    localStorage.removeItem("creds");
    navigate("/login");
  };

  return (
    <div>
      <LogoutOutlinedIcon
        onClick={handleLogout}
        color="secondary"
        fontSize="large"
        sx={{ position: "absolute", right: 30, top: 5 }}
      />
    </div>
  );
};

export default Logout;
