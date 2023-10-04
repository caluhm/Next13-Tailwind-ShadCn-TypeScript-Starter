import { isAdmin } from "@/lib/isauthorised";

export default async function AdminPage() {
  await isAdmin();
  return <div>Admin Page</div>;
}
