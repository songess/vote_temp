export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full sm:w-[640px] bg-backgroundColor h-dvh">{children}</div>;
}
