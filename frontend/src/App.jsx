import AppRouter from "./components/routers/AppRouter";
import { AuthContextProvider } from "./contexts/authContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </>
  );
}

export default App;
