import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default async function DashboardLandingPage() {
  const session = await auth();

  if (!session || !session.user) {
    toast("Login First!");
    redirect("/");
  }

  return <div>Dashboar Page</div>;
}
