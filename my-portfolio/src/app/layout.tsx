
import { ReactNode } from "react";
import Landing from './components/Landing'

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body className="flex flex-col items-center">
        <Landing />

      </body>
    </html>
  );
};

export default Layout;