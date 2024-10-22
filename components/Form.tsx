import Image from "next/image";
import collapseIcon from "../static/collapeIcon.svg";
import tickIcon from "../static/tickIcon.svg";
export default function Form() {
  return (
    <div className="flex flex-col justify-center space-y-4 items-center w-[901px] mx-auto font-pretendard">
      <div className=" bg-[#141414]  flex justify-between items-center w-[901px] h-[66px] mb-4 border rounded-[10px] border-[#FFFFFF26]">
        <div className="text-left pl-[40px]">
          <span className="font-pretendard  opacity-60 font-bold text-white text-[20px] leading-[23.87px]">
            영상 유형 선택
          </span>
        </div>

        <div className="pr-[40px]">
          <Image src={collapseIcon} alt="collapse" />
        </div>
      </div>
      <div className="flex items-center bg-[#141414]  w-[901px] h-[66px] pl-[40px] opacity-60 font-bold text-white  text-[20px] leading-[23.87px]  border border-t-0 rounded-[10px] border-solid border-[#FFFFFF26] mb-4">
        연락 받으실 담당자 성함
      </div>

      <div className="flex items-center bg-[#141414] w-[901px] h-[66px] pl-[40px]  font-bold opacity-60 font-bold text-white  text-[20px] leading-[23.87px] rounded-tl-[10px] border border-t-0 rounded-[10px] border-solid border-[#FFFFFF26] mb-4">
        이메일
      </div>

      <div className="flex items-center bg-[#141414] w-[901px] h-[66px] pl-[40px] opacity-60 font-bold text-white  text-[20px] leading-[23.87px] rounded-tl-[10px] border border-t-0 rounded-[10px] border-solid border-[#FFFFFF26] mb-4">
        휴대폰 번호
      </div>

      <div className="flex flex-col bg-[#141414] w-[901px] h-[278px] pl-[40px] opacity-60 font-bold text-white  text-[20px] leading-[30px] rounded-tl-[10px] border border-t-0 rounded-[10px] border-solid border-[#FFFFFF26] mb-4 leadning-[30px] pt-[92px]">
        <span>의뢰하실 영상내용</span>
        <span>아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요.</span>

        <span className="font-normal w-[686px]">
          고객님의 비즈니스 유형 : 관공서/일반기업/소상공인 등 영상 장르 :
          홍보,프로모션/IR/프레젠테이션 등 내용 : 제작하시고자 하는 영상의
          내용을 간단히 기재해주세요.
        </span>
      </div>

      <div className="flex items-center bg-[#141414] w-[901px] h-[66px] pl-[40px] opacity-60 text-white  text-[20px] leading-[23.87px] rounded-tl-[10px] border border-t-0 rounded-[10px] border-solid border-[#FFFFFF26] mb-4 font-pretendard">
        참고 영상
      </div>

      <div className="w-[901px] h-[34px] text-[#FF6D51] font-pretendard">
        <strong>*</strong>
        참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면
        더 정확히 안내해드리겠습니다.
      </div>

      <div className="flex justify-between  pl-4 w-[901px] opacity-60 text-white  text-[20px] leading-[23.87px] rounded-tl-[10px] border border-t-0 rounded-[10px] border-solid border-[#FFFFFF26] mb-4 font-pretendard">
        <div className="flex justify-between items-center space-x-4">
          <Image src={tickIcon} alt="tick" />
          <span>개인정보처리방침에 동의합니다.</span>
        </div>
        <div>
          <button className="bg-[#FF6D51] text-white h-[64px] top-[5834px] left-[1265px] py-[16px] px-[28px] rounded-tl-[8px] rounded-[8px] bg-[#FF6D51]">
            문의 보내기
          </button>
        </div>
      </div>
    </div>
  );
}
