import { useAuth0 } from "@auth0/auth0-react";
import { PersonCircle } from "react-bootstrap-icons";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button
    className="text-4xl text-[#F18F01] hover:text-white"
    onClick={() => loginWithRedirect()}
  ><PersonCircle /></button>;
};

export default LoginButton;