import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lottie (SSG/SSR error fix)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Loading() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        // Public folder theke JSON file fetch korbo
        fetch("/assets/images/about_us/carloading.json")
            .then((res) => res.json())
            .then((data) => setAnimationData(data));
    }, []);

    if (!animationData) return <p>Loading animation...</p>; // Jodi data load na hoy, fallback dibe

    return (
        <div className="flex items-center justify-center h-screen bg-transparent">
            <Lottie animationData={animationData} loop={true} className="w-64 h-64" />
        </div>
    );
}