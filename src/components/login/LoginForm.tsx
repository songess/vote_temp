export default function LoginForm() {
  return (
    <form
      action=""
      className="w-full h-[370px] flex flex-col items-center relative mb-4"
    >
      {/* <label htmlFor="name" className="w-[80%]">
        이름
      </label> */}
      <input
        type="text"
        id="name"
        className="w-[80%] h-8 m-8"
        placeholder="Enter your name"
      />
      {/* <label htmlFor="password" className="w-[80%]">
        비밀번호
      </label> */}
      <input
        type="password"
        id="password"
        className="w-[80%] h-8"
        placeholder="Enter your password"
      />
      <button className="bg-themeColor text-white absolute bottom-0 w-[90px] h-[45px] rounded-lg">
        로그인
      </button>
    </form>
  );
}
