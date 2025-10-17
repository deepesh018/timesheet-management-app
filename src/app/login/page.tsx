"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid credentials");
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <div className="md:flex h-screen">
            {/* Left Half*/}
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center bg-white">
                <form
                    onSubmit={handleLogin}
                    className="mx-[80px]"
                >
                    <h1 className="text-2xl font-bold text-gray-800 mb-8">
                        Welcome Back
                    </h1>

                    <div className="w-full mb-6">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-semibold mb-2"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            className="w-full border text-gray-700 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-semibold mb-2"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border text-gray-700 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Remember Me & Button */}
                    <div className="items-center justify-between mb-6">
                        <label className="flex mb-2 items-center text-sm text-gray-600">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                                className="mr-2 accent-blue-600"
                            />
                            Remember Me
                        </label>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                        >
                            Sign in
                        </button>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center mt-2">{error}</p>
                    )}
                </form>
            </div>

            {/* Right Half*/}
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center bg-blue-600 text-white p-10">
                <div className="w-full">
                    <h2 className="text-4xl font-bold mb-4">ticktock</h2>
                    <p className="text-lg text-justify w-full ">
                        Introducing ticktock, our cutting-edge timesheet web application designed to revolutionize how you manage employee work hours. With ticktock, you can effortlessly track and monitor employee attendance and productivity from anywhere, anytime, using any internet-connected device.
                    </p>
                </div>
            </div>
        </div>
    );
}
