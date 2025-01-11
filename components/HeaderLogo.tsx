import Link from 'next/link';
import Image from 'next/image';
export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className=" items-center hidden lg:flex  ">
        <Image src="/logo.png" alt="Logo" height={50} width={50} />
        <p className="font-semibold text-black text-1xl  "> SmartSpend</p>
      </div>
    </Link>
  );
};
