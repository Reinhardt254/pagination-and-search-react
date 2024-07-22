import Products from "@/components/products";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <section className="">
        <Image
          src="/home-heroe.png"
          alt="home-heroe-image"
          className="w-full h-2/3 max-h-96 pb-2"
          width={1920}
          height={1080}
        />
      </section>
        <Products />
      <section></section>
    </main>
  );
}
