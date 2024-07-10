import Header from "@/Components/Header";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header />
            <div className="bg-main flex justify-center items-center min-h-screen min-w-screeb">
                <div className="flex gap-y-8 flex-col items-center justify-center mt-20">
                    <h1 className="text-5xl font-bold text-white">THE VALORANT GUIDE YOU NEED</h1>
                    <Link href={"/agents"}><button className="border-2 font-bold border-red-800 px-7 py-3 rounded-md text-red-900 hover:bg-red-900 hover:text-white transition-all">Get Started</button></Link>
                </div>
            </div>
        </>
    );
}
