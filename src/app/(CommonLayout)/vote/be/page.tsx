'use client';
import ArrowBackSVG from '@public/arrowBack.svg';
import { Header } from '@components/all/Header';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { voteFetchWithToken } from '@apis/fetchAPI';

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
    // const cookie = cookies();
    // const token = cookie.get('token');
    const token =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cGZsYSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MTkyODgxNzZ9.sEMFxwWSihPzDNx3IJpUewEEkDLhlcAKkiIxIPLl1aOr3MCY4t3sAOdP46af5lz_YfAAqeZeytp_mym0el23iQ';
    try {
      const response = await voteFetchWithToken.post(
        'vote/be',
        { leaderName: CandidateName[votedIdx], userName: 'name' },
        token
      );
      if (response.ok) {
        alert('투표가 완료되었습니다.');
        router.push('/vote/be-result');
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // const cookie = cookies();
      // const token = cookie.get('token');
      const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cGZsYSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MTkyODgxNzZ9.sEMFxwWSihPzDNx3IJpUewEEkDLhlcAKkiIxIPLl1aOr3MCY4t3sAOdP46af5lz_YfAAqeZeytp_mym0el23iQ';

      try {
        const response = await voteFetchWithToken.get('vote/be', token);
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
      <section className="flex flex-wrap gap-[20px] w-full">
        {CandidateName.map((name, idx) => (
          <button
            key={idx}
            onClick={() => {
              setVotedIdx(idx);
            }}
            className={`basis-[calc(50%-10px)] h-[60px] bg-white rounded-[10px] flex justify-center items-center shadow-md text-[20px] font-semibold ${
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
          router.push('/vote/be-result');
        }}
      >
        결과보기 ▶︎
      </div>
      <button
        onClick={handleSubmit}
        className={`bg-themeColor text-white w-full h-[60px] rounded-[10px] mt-[20px] mb-[40px] text-[28px] font-semibold ${
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
