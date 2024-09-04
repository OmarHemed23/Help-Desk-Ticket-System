import { useState, useEffect } from "react";

export function useTheme() {
    const [theme, setTheme] = useState("auto");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "auto";
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (theme) => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
        } else if (theme === "light") {
            root.classList.add("light");
            root.classList.remove("dark");
        } else {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                root.classList.add("dark");
                root.classList.remove("light");
            } else {
                root.classList.add("light");
                root.classList.remove("dark");
            }
        }
    };

    const setAndApplyTheme = (newTheme) => {
        setTheme(newTheme);
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return { theme, setAndApplyTheme };
}
