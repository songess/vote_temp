'use client';
import { Header } from '@components/all/Header';
import { useRouter } from 'next/navigation';

const Cards = [
  { name: 'FE 파트장 투표', url: '/vote/fe' },
  { name: 'BE 파트장 투표', url: '/vote/be' },
  { name: '팀 투표', url: '/vote/team' },
];
export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-[60px] w-full h-full px-[30px] relative justify-center">
      <Header />
      {Cards.map((card) => (
        <div
          key={card.name}
          className="w-full h-[200px] bg-white flex justify-center items-center rounded-[12px] shadow-md cursor-pointer"
          onClick={() => {router.push(card.url)}}
        >
          <h1 className="text-[40px] font-bold">{card.name}</h1>
        </div>
      ))}
    </div>
  );
}
