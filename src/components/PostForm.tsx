import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const PostForm = () => {
  const loop = () => {
    const arr: number[] = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  };
  return (
    <>
      <Card className="w-full lg:max-w-[800px]">
        <div className=" lg:flex justify-between p-3">
          <Avatar>
            <AvatarImage src="/images/img3.jpeg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Link href="/post" className="text-blue-500 hover:underline">
            You've got something in mind? Create Post
          </Link>
        </div>
      </Card>
    </>
  );
};

export default PostForm;
