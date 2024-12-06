import Image from "next/image";
import Link from "next/link";
import SouthIcon from '@mui/icons-material/South';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <div className="w-24 h-24 mb-6">
          <Image src="/logo.webp" alt="Main Icon" width={96} height={96} style={{borderRadius : "15px"}}/>
        </div>
        <h1 className="text-4xl font-bold">​nomisia run flux</h1>
        <br />
        <h2 className="text-xl font-bold">​간단한 명령어로 자신의 컴퓨터에서 오픈소스 AI모델을 실행하세요.</h2>
        <p className="text-gray-500 mt-2">
          Flux, Stable video, Live Portrait, f5-tts, ROOP 와<br/>
          같은 최신 생성AI를 실행해 보세요.<br />
        </p>
        <Link href="/download/linux" style={{color:"white"}}>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded">
            Download &nbsp;<SouthIcon fontSize="small"/>
          </button>
        </Link>
        <p className="text-gray-500 mt-2">Available for macOS, Linux, and Windows</p>
      </main>
    </div>
  );
}
