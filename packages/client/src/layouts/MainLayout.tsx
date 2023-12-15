import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="bg-black flex items-center">
        <div className="container flex items-center justify-center gap-4 relative">
          {!isHomepage && (
            <Button
              onClick={() => navigate(-1)}
              type="secondary"
              size="md"
              classes="absolute left-4"
            >
              <IconArrowNarrowLeft size={20} />
              <span className="hidden md:block">Zurück</span>
            </Button>
          )}
          <p className="text-white text-xl font-bold">Stackoverflow App</p>
        </div>
      </header>
      <main className="flex-grow my-2 lg:my-4">
        <div className="container">{children}</div>
      </main>
      <footer className="bg-black text-white">
        <div className="container flex justify-center">© 2023 JH</div>
      </footer>
    </div>
  );
};
