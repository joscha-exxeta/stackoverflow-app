export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className="p-4 bg-black text-white font-bold flex items-center">Stackoverflow App</header>
      <main className="px-4 pt-8 pb-12 bg-white">{children}</main>
      <footer className="p-4 bg-black text-white flex items-center">© 2023 JH</footer>
    </>
  );
};
