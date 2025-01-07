import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabaseUrl, supabaseAnonKey } from "/SupabaseClient.js";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
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
    return <button onClick={signUp}>Sign in with Google</button>;
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
