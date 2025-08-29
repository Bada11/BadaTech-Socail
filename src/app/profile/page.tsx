import { auth } from "@/auth";
import Image from "next/image";

const Profile = async () => {
  const session = await auth();
    if (!session?.user) {
    return (
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
        <p className="text-gray-500">Not signed in</p>
      </div>
    );
  }


  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
      {/* Profile Picture */}
      <div className="relative w-24 h-24">
        {session?.user && (
          <Image
            src={session?.user?.image ?? "/default-avatar.png"}
            alt={session?.user?.name ?? "User Avatar"}
            fill
            className="rounded-full object-cover border-2 border-gray-200"
          />
        )}
      </div>

      {/* Name & Email */}
      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        {session?.user?.name}
      </h2>
      <p className="text-sm text-gray-500">{session?.user?.email}</p>
      
    </div>
  );
};

export default Profile;
