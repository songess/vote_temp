const DUMMYUSER = 'FE 홍길동'

export function Header(){
    return (
        <header className="w-full h-[80px] bg-white flex justify-between items-center px-[20px]">
            <h1 className="text-[28px] text-themeColor font-bold">CEOS</h1>
            <div className="flex gap-2 items-center">
              <span className='text-[16px]'>{DUMMYUSER}</span>
              <button className="bg-themeColor text-white	 text-[18px] rounded-[10px] border-none w-[80px] h-[40px]">로그인</button>
            </div>
        </header>
    )
}