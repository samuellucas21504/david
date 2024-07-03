"use client"
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

const ThemeProvider = ({children, ...props} : ThemeProviderProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) {
        return children;
    }

    return (
        <NextThemeProvider {...props}>
            {children}
        </NextThemeProvider>
            
    );
}

export default ThemeProvider;