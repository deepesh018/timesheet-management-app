"use client";
import Navbar from "@/components/Navbar";
import Table from "@/components/Table";
import Footer from "@/components/Footer";

export default function Dashboard() {

  const username = "John Doe";



  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar username={username} />
      <main className="flex flex-col flex-1 items-center justify-start py-8 px-4 gap-8   mx-auto">
        <Table />
        <Footer />
      </main>
    </div>

  );
}
