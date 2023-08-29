"use client";

import { useState, useEffect } from "react";

export const useWindow = (): boolean => {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return hasWindow;
};
