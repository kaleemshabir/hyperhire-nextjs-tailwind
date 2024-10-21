import logo from "../static/logo.svg";
import globeIcon from "../static/globe.svg";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="w-full h-[100px] bg-black backdrop-blur-[40px]">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <div className="text-white text-xl">
          <Image src={logo} alt="PLOONET" />
        </div>

        <nav className="flex w-[876px] h-[19px] gap-[80px] items-center opacity-60">
          <a
            href="#"
            className="w-[56px] h-[19px] text-[16px] font-bold leading-5 text-left text-white"
          >
            스튜디오
          </a>
          <a
            href="#"
            className="w-[56px] h-[19px] text-[16px] font-bold leading-5 text-left text-white"
          >
            워크센터
          </a>
          <a
            href="#"
            className="w-[56px] h-[19px] text-[16px] font-bold leading-5 text-left text-white"
          >
            손비서
          </a>
          <a
            href="#"
            className="w-[56px] h-[19px] text-[16px] font-bold leading-5 text-left text-white"
          >
            메타휴먼
          </a>
          <a
            href="#"
            className="w-[60px] h-[19px] text-[16px] font-bold leading-5 text-left text-white"
          >
            영상제작소
          </a>
          <a
            href="#"
            className="w-[56px] h-[19px] text-[16px] font-bold leading-5 text-left text-white"
          >
            공지사항
          </a>
          <a
            href="#"
            className="w-[56px] h-[19px] text-[16px] font-bold leading-5 text-left text-white"
          >
            제휴문의
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <span className="text-white">로그인</span>
          <Image src={globeIcon} alt="Globe Icon" className="w-10 h-10" />
        </div>
      </div>
    </header>
  );
}
