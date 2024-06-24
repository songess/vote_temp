export default function LoginForm() {
  return (
    <form
      action=""
      className="w-full h-[370px] flex flex-col gap-y-5 items-center relative mb-4"
    >
      <label htmlFor="userId" className="w-[80%]">
        아이디
      </label>
      <input
        type="text"
        id="userId"
        className="w-[80%] h-8"
        placeholder="Enter your name"
      />
      <label htmlFor="userPassword" className="w-[80%]">
        비밀번호
      </label>
      <input
        type="password"
        id="userPassword"
        className="w-[80%] h-8"
        placeholder="Enter your password"
      />
      <button className="bg-themeColor text-white absolute bottom-0 w-[90px] h-[45px] rounded-lg">
        로그인
      </button>
    </form>
  );
}
