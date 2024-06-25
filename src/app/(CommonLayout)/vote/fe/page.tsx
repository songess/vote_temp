"use client";
import ArrowBackSVG from '@public/arrowBack.svg';
import { Header } from '@components/all/Header';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { voteFetchWithToken } from '@apis/fetchAPI';
// import { cookies } from 'next/headers';

const CandidateName = [
  '김다희',
  '김동혁',
  '김민영',
  '김수현',
  '김승완',
  '송은수',
  '안혜연',
  '이나현',
  '이지인',
  '조유담',
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
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cGZsYSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MTkyODgxNzZ9.sEMFxwWSihPzDNx3IJpUewEEkDLhlcAKkiIxIPLl1aOr3MCY4t3sAOdP46af5lz_YfAAqeZeytp_mym0el23iQ';

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
      // const cookie = cookies();
      // const token = cookie.get('token');
      const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkbWR0biIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MTkzMTg1MzV9.1Bo2PY6RpBT_1XRjOhp0zAhzB2CDZrMwCik7rPuN1-_RO0RX_dkYEWX_HYMDdJsvsZUOG3cUkPpis7r7IBpxCw';

      try {
        const response = await voteFetchWithToken.get('vote/fe', token);
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
      <h1 className="py-[30px] text-[28px]">FE 파트장 투표</h1>
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
          isVoted ||
          status !== 'FE' ||
          votedIdx === -1
            ? 'opacity-50 cursor-not-allowed'
            : ''
        }`}
        disabled={
          isVoted ||
          status !== 'FE' ||
          votedIdx === -1
        }
      >
        {DUMMYRESPONSE.isVoted ? '투표완료' : '투표하기'}
      </button>
    </div>
  );
}
