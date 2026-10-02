import AdminClient from "./admin-client";

export const metadata = {
  title: "Admin | Post editor",
  description: "Private post editor.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminClient />;
}
