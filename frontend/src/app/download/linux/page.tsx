"use client";

import CopyCommandButton from "@/app/component/CopyCommandButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DownloadPage() {
  const router = useRouter();
  const handleNavigation = (url: string) => {
    router.push(url); // 특정 URL로 이동
  };

  const installCommand = "curl -fsSL https://nomisia.net/install_linux.sh | bash";


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h1 className="text-2xl font-bold">Download Nomisia</h1>
        <div className="flex items-center space-x-4 mt-6">
          <div className="text-center download_btn" onClick={() => handleNavigation("/download/mac")}>
            <Image src="/macos.png" alt="macOS" width={40} height={40} />
            <p className="mt-2 text-gray-600">macOS</p>
          </div>
          <div className="text-center download_btn" style={{backgroundColor: "#f0f0f0"}} onClick={() => handleNavigation("/download/linux")}>
            <Image src="/linux.png" alt="Linux" width={40} height={40} />
            <p className="mt-2 text-gray-600">Linux</p>
          </div>
          <div className="text-center download_btn" onClick={() => handleNavigation("/download/windows")}>
            <Image src="/windows.png" alt="Windows" width={40} height={40} />
            <p className="mt-2 text-gray-600">Windows</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 style={{marginBottom: "10px"}}>Install with one command:</h2>
          <CopyCommandButton command={installCommand} />
        </div>
        {/* <div className="mt-6 w-full max-w-sm">
          <p className="text-gray-600 mb-2">While Ollama downloads, sign up to get notified of new updates.</p>
          <input
            type="email"
            placeholder="your email address"
            className="w-full px-4 py-2 border rounded mb-2"
          />
          <button className="w-full px-4 py-2 bg-black text-white rounded">
            Get updates
          </button>
        </div> */}
      </main>
    </div>
  );
}