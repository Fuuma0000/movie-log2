import "./App.css";
import SignInScreen from "./screens/SignInScreen";
import Default from "./screens/Default";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Routers from "./Routers";

function App() {
  const [user] = useAuthState(auth);
  //TODO
  //テスト中はログイン画面を表示しない
  // return <div>{user ? <Default /> : <SignInScreen />}</div>;
  // return <Default></Default>;
  return <Routers></Routers>;
}

export default App;
