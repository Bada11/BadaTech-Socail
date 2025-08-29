import { auth } from "@/auth";
import Navbar from "./Navbar";

const NavbarServer = async () => {
  const session = await auth();
  return <Navbar session={session} />;
};

export default NavbarServer;
