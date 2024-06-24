export default function SignupForm() {
  return (
    <form
      action=""
      className="w-full h-fit flex flex-col gap-y-5 items-center relative mb-4"
    >
      <label htmlFor="userName" className="w-[80%]">
        이름
      </label>
      <input
        type="text"
        id="userName"
        name="userName"
        className="w-[80%] h-8"
        placeholder="Enter your name"
      />

      <label htmlFor="userId" className="w-[80%]">
        아이디
      </label>

      <input
        type="text"
        name="userId"
        className="w-[80%] h-8"
        placeholder="Enter your Id"
      />

      <label htmlFor="userPassword" className="w-[80%]">
        비밀번호
      </label>

      <input
        type="password"
        name="userPassword"
        className="w-[80%] h-8"
        placeholder="Enter your password"
      />

      <label htmlFor="userEmail" className="w-[80%]">
        이메일
      </label>

      <input
        type="email"
        name="userEmail"
        className="w-[80%] h-8"
        placeholder="Enter your own email"
      />

      <label htmlFor="userPart" className="w-[80%]">
        파트
      </label>

      <select name="userPart" className="w-[80%] h-8">
        <option value="FRONTEND">FRONTEND</option>
        <option value="BACKEND">BACKEND</option>
      </select>

      <label htmlFor="userTeam" className="w-[80%]">
        소속 팀
      </label>

      <select name="userTeam" className="w-[80%] h-8">
        <option value="1">AZITO</option>
        <option value="2">BEATBUDDY</option>
        <option value="3">TIG</option>
        <option value="4">BULDOG</option>
        <option value="5">COUPLELOG</option>
      </select>
      <button className="bg-themeColor text-white  bottom-0 w-[90px] h-[45px] rounded-lg">
        회원가입
      </button>
    </form>
  );
}
