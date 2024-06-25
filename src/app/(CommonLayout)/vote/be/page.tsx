'use client';
import ArrowBackSVG from '@public/arrowBack.svg';
import { Header } from '@components/all/Header';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { voteFetchWithToken } from '@apis/fetchAPI';
import { cookies } from 'next/headers';

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

const DUMMYRESPONSE = { isVoted: false, status: 'FE' };

export default function Page() {
  const router = useRouter();
  const [votedIdx, setVotedIdx] = useState<number>(-1);
  const [isVoted, setIsVoted] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('FE');

  const handleSubmit = async () => {
    const cookie = cookies();
    const token = cookie.get('token');

    try {
      const response = await voteFetchWithToken.post(
        '/vote/fe',
        { leaderName: CandidateName[votedIdx], userName: 'name' },
        token
      );
      if (response.ok) {
        alert('투표가 완료되었습니다.');
        router.push('/vote/fe-result');
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const cookie = cookies();
      const token = cookie.get('token');

      try {
        const response = await voteFetchWithToken.get('/vote/fe', token);
        if (response.ok) {
          const data = await response.json();
          setIsVoted(data.isVoted);
          setStatus(data.status);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

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
            onClick={() => {
              setVotedIdx(idx);
            }}
            className={`basis-[calc(50%-15px)] h-[70px] bg-white rounded-[10px] flex justify-center items-center shadow-md text-[28px] font-semibold ${
              idx === votedIdx ? 'border-2 border-themeColor' : ''
            }`}
          >
            {name}
          </button>
        ))}
      </section>
      <div
        className="text-themeColor text-[20px] font-semibold self-end mt-[20px] grow cursor-pointer"
        onClick={() => {
          router.push('/vote/fe-result');
        }}
      >
        결과보기 ▶︎
      </div>
      <button
        onClick={handleSubmit}
        className={`bg-themeColor text-white w-full h-[70px] rounded-[10px] mt-[20px] mb-[40px] text-[28px] font-semibold ${
          isVoted || status !== 'FE' || votedIdx === -1
            ? 'opacity-50 cursor-not-allowed'
            : ''
        }`}
        disabled={isVoted || status !== 'BE' || votedIdx === -1}
      >
        {DUMMYRESPONSE.isVoted ? '투표완료' : '투표하기'}
      </button>
    </div>
  );
}
