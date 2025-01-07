import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabaseUrl, supabaseAnonKey } from "/SupabaseClient.js";
import Button from "./components/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>;
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
  };

  const signUp = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <>
        <LandingPage />
        <Button onClick={signUp} variant="filled" size="mid">
          {" "}
          Sign in with Google{" "}
        </Button>
      </>
    );
  } else {
    return (
      <div>
        <h2>Welcome,{session?.user?.email}</h2>
        <button onClick={signOut}>Sign Out</button>
      </div>
    );
  }
}

export default App;
