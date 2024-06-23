'use client'
import ArrowBackSVG from '@public/arrowBack.svg';
import { Header } from '@components/all/Header';
import { useRouter } from 'next/navigation';

const CandidateName = [
  '임형준',
  '장영환',
  '이도현',
  '이진우',
  '전민',
  '김성현',
  '박수빈',
  '박시영',
  '정기민',
  '권찬',
];

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full px-[30px] relative pt-[80px] items-center">
      <Header />
      <ArrowBackSVG
        className="absolute top-[120px] left-[25px] cursor-pointer"
        onClick={() => {
          router.push('/');
        }}
      />
      <h1 className="py-[30px] text-[28px]">BE 파트장 투표</h1>
      <section className="flex flex-wrap gap-[30px] w-full">
        {CandidateName.map((name, idx) => (
          <button
            key={idx}
            className="basis-[calc(50%-15px)] h-[70px] bg-white rounded-[10px] flex justify-center items-center shadow-md text-[28px] font-semibold"
          >
            {name}
          </button>
        ))}
      </section>
      <div className="text-themeColor text-[20px] font-semibold self-end mt-[20px] grow cursor-pointer">
        결과보기 ▶︎
      </div>
      <button className="bg-themeColor text-white w-full h-[70px] rounded-[10px] mt-[20px] mb-[40px] text-[28px] font-semibold">
        투표하기
      </button>
    </div>
  );
}
