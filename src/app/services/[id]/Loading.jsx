import Lottie from "lottie-react";
import carLoading from "../../../../public/assets/images/about_us/carloading.json"; // লোডিং এনিমেশন JSON ফাইল

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-transparent">
            <Lottie animationData={carLoading} loop={true} className="w-64 h-64" />
            {/* <h2 className="text-2xl font-bold text-amber-700 mt-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
                Loading ...
            </h2> */}
        </div>
    );
}