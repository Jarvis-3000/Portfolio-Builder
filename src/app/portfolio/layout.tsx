export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center max-w-[1800px] mx-auto h-screen">
      {children}
    </div>
  );
}
