import React from "react";
import SocialMedia from "./SocialMedia";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
let theme = "light"


export default function Introduction() {
    const { setTheme } = useTheme()

    return (
        <div className=" flex justify-center items-center flex-col h-screen ">
            <div className="flex flex-col bg-white rounded-full  border-black border-4 w-3/5 h-3/5 justify-center items-center">
                <div className="text-center text-xl lg:text-4xl font-[family-name:var(--font-geist-mono)]">

                    <p className="mb-2 ">
                        Welcome to my website!
                    </p>
                    <p >I'm Xavier Nishikawa.</p>

                </div>
                <Button className="mt-5" variant="outline" size="icon" onClick={() => theme == "light" ? (setTheme("dark"), theme = "dark") : (setTheme("light"), theme = "light")}>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
                <SocialMedia />
            </div>

        </div>

    );
}

