type props = {
  children: React.ReactNode;
};
import { Header } from '@/components/Header';
const dashboard = ({ children }: props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};
export default dashboard;
