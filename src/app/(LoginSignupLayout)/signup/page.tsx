// 승완
import SignupForm from '@components/signup/SignupForm';
import OrLogin from '@components/signup/OrLogin';
export default function SignUpPage() {
  return (
    <>
      <p className="w-full h-[100px] min-h-[100px] flex justify-center items-end text-3xl font-bold mb-[50px] ">
        CEOS 투표 회원가입
      </p>
      <SignupForm />
      <OrLogin />
    </>
  );
}
