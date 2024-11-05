
import Image from "next/image";
import logo from "@/public/ygdl.png"

const HomePage = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-6">Yugilist!!</h1>
      <div className="flex">
        <Image
          src={logo}
          alt="Next.js Logo"
          width={1200}
          height={750}
          priority
        />
      </div>
    </main>
  );
}


export default HomePage
