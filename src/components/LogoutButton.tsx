import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })} className='block px-4 py-2 text-sm text-gray-700'>
      Log Out
    </button>
  );
};

export default LogoutButton;