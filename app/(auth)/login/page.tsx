import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function LoginPage() {
  const session = await auth();
  console.log(session);

  return (
    <div className="p-2 bg-gradient-to-b from-slate-300 to-green-400 flex gap-2">
      {session && session.user ? (
        <div className="flex gap-2 items-center">
          <p className="text-gray-800 font-bold">{session.user.name}</p>
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
          >
            <Button variant={"link"} type="submit">
              Sign Out
            </Button>
          </form>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";

            await signIn();
          }}
        >
          <Button type="submit">Sign In</Button>
        </form>
      )}
    </div>
  );
}
