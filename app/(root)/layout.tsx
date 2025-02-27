import Image from "next/image";
import Sidebar from "../componets/Sidebar";
import MobileNav from "../componets/MobileNav";
import { getLoggedInUser } from "../lib/actions/user.actions";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();


  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image 
          src="/icons/logo.svg" 
          width={50} 
          height={50} 
          alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
