export default function LoginSignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full sm:w-[640px] bg-backgroundColor h-dvh flex flex-col">
      {children}
    </div>
  );
}
