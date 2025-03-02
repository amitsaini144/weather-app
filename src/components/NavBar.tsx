import { ThemeToggler } from "./ThemeToggler";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="fixed top-0 z-50 w-full backdrop-blur px-3 py-2">
            <div className="container mx-auto flex flex-row justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Weather App
                </Link>
                <div className='flex gap-1'>
                    <ThemeToggler />
                </div>
            </div>
        </nav>
    );
}