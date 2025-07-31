import * as React from "react";
import Image from "next/image";
import images from "../data/images";
import { Card, CardContent} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Stories = () => {
  return (
    <>
    <h2 className="mb-10">Stories</h2>
    <Carousel className="lg:max-w-[800px] ">
      <CarouselContent className="">
        {images.map((img) => (
          <CarouselItem
            key={img.id}
            className="pl-4 md:basis-1/3 basis-1/3 lg:basis-1/5 "
          >
            <div className="p-1">
              <Card className="p-0  rounded-full lg:rounded-lg shadow-emerald-950">
               
                <CardContent className="overflow-hidden rounded-full lg:rounded-lg flex aspect-square  relative p-0 bg-gradient-to-b">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform "
                  />
                  
                  <div className="hidden lg:block absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/70 to-transparent z-10" />
                   <p className="absolute bottom-0 left-2 text-white z-20" >{img.user}</p>
                 
                  <div className="absolute top-3 left-3 z-10 hidden lg:block ">
                    <Avatar className="h-10 w-10 border-3 p-1 rounded-full text-white border-green-700 shadow-md  ">
                      <AvatarImage src={img.avatar} alt={img.alt} />
                      <AvatarFallback>{img.opt}</AvatarFallback>
                    </Avatar>
                  </div>
             
                </CardContent>
                
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="sm:block hidden" />
      <CarouselNext className="sm:block hidden" />
    </Carousel>
    </>
  );
};

export default Stories;
