import Products from "@/components/products";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <section className="">
        {/* <Image
          src="/home-heroe.png"
          alt="home-heroe-image"
          className="w-full h-2/3 max-h-96 pb-2"
          width={1920}
          height={1080}
        /> */}
        <div className="min-h-96 flex justify-center items-center flex-col pt-48 pb-28">
          <h1 className="font-bold text-6xl ">FREEZEDY EPZ</h1>
          <h1 className="font-semibold text-4xl pt-5 text-slate-800">FROM SEED TO FORK</h1>
        </div>
      </section>
        <Products />
      <section></section>
    </main>
  );
}
