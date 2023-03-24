import "./App.css";
import SignInScreen from "./screens/SignInScreen";
import Default from "./screens/Default";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);

  return <div>{user ? <Default /> : <SignInScreen />}</div>;
}

export default App;
