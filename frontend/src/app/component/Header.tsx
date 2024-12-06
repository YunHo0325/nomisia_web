import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <Link href="/" style={{color:"white"}}>
          <div className="flex items-center space-x-4">
            <Image src="/logo.webp" alt="Logo" width={32} height={32} style={{borderRadius : "20px"}}/>
            <h3 className="font-bold text-black">NOMISIA</h3>
          </div>
        </Link>
        <div className="flex space-x-4">
          <Link href="/download/linux" style={{color:"white"}}>
            <button className="px-4 py-2 bg-black text-white rounded">
              Download
            </button>
          </Link>
        </div>
      </header>
  );
}

export default Header;
