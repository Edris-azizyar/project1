import Link from "next/link";
import { useContext } from "react";
import Layout from "../components/Layout";
import AuthContext from "../context/AuthContext";

export default function HomePage() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Layout>
      <div>
        {user ? (
          <>
            <button onClick={() => logout()} className="btn">
              Logout
            </button>
            <h1>you are login</h1>
          </>
        ) : (
          <>
            <Link href="../account/login">
              <button className="btn">login</button>
            </Link>
            <h1>you are not login</h1>
          </>
        )}
      </div>
    </Layout>
  );
}
