// 승완
import LoginForm from '@components/login/LoginForm';
import OrSignup from '@components/login/OrSignup';
export default function LoginPage() {
  return (
    <>
      <p className="w-full h-[100px] min-h-[100px] flex justify-center items-end text-3xl font-bold mb-[50px]">
        CEOS 투표 로그인
      </p>
      <LoginForm />
      <OrSignup />
    </>
  );
}
