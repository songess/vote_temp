'use client';
import { Header } from '@components/all/Header';
import ArrowBackSVG from '@public/arrowBack.svg';
import CrownSVG from '@public/crown.svg';
import { useRouter } from 'next/navigation';

interface Candidate {
	leaderName: string;
	voteCount: number;
}

const DUMMYCANDIDATERANKING:Candidate[] = [
  { leaderName: '장영환', voteCount: 10 },
  { leaderName: '정기민', voteCount: 9 },
  { leaderName: '임형준', voteCount: 8 },
  { leaderName: '이도현', voteCount: 7 },
  { leaderName: '이진우', voteCount: 6 },
  { leaderName: '전민', voteCount: 5 },
  { leaderName: '김성현', voteCount: 4 },
  { leaderName: '박수빈', voteCount: 3 },
  { leaderName: '박시영', voteCount: 2 },
  { leaderName: '권찬', voteCount: 1 },
];

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full relative px-5 pt-[120px] items-center">
      <Header />
      <ArrowBackSVG
        className="absolute top-[120px] left-[25px] cursor-pointer"
        onClick={() => {
          router.back();
        }}
      />
      <div className='w-[120px] h-[120px] bg-white flex justify-center items-center rounded-full text-[24px] font-semibold relative'>
        <div className='absolute top-[-24px] left-[-18px]'>
          <CrownSVG />
        </div>
        {DUMMYCANDIDATERANKING[0].leaderName}
      </div>
      <div className="my-[10px]">{DUMMYCANDIDATERANKING[0].voteCount}표</div>
      <section className='w-full bg-white rounded-t-xl overflow-y-scroll'>
        {DUMMYCANDIDATERANKING.slice(1).map((candidate,idx) => {
          return (
            <div key={candidate.leaderName} className="flex justify-between items-center w-[100%] h-[70px] text-[28px] px-[30px] border-b border-gray-200">
              <div className='basis-[40px] flex justify-center'>{idx+2}</div>
              <div className="flex items-center">
                {candidate.leaderName}
              </div>
              <div>{candidate.voteCount}표</div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
