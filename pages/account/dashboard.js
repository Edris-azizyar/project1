import Layout from "@/components/Layout";
import Link from "next/dist/client/link";

export default function UserDashboard() {
  return (
    <Layout>
      <h1>User Dashboard</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
}
