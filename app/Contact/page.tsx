import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { GlobeDemo } from "@/components/Global/globe";
export default function ContactUs() {
  return (
    <main className="flex  flex-col min-h-screen justify-center items-center py-28">
      <div className="justify-center items-center font-extrabold flex text-2xl sm:text-7xl  ">
        <h1>Contact Us</h1>
      </div>
      <div className="flex flex-row w-full h-full items-center justify-center mt-8">
        <div className="w-full h-full items-center justify-center md:flex hidden">
          <GlobeDemo />
        </div>
        <div className="md:w-[80%] h-full justify-center items-center  flex w-[50%]">
          <form>
            <Input id="name" placeholder="Name..." className="mb-6" />
            <Input
              id="email"
              type="email"
              placeholder="Email..."
              className="mb-6"
            />
            <Textarea id="message" placeholder="Message..." className="mb-6" />

            <Button type="submit" className="w-full">
              Send
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
