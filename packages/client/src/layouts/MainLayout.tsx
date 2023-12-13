export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="p-4 bg-black text-white text-xl font-bold flex items-center">Stackoverflow App</header>
      <main className="flex-grow px-4 pt-8 pb-12 bg-white">{children}</main>
      <footer className="p-4 bg-black text-white flex items-center">© 2023 JH</footer>
    </div>
  );
};
