import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const TopNav = () => {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10 bg-white dark:bg-gray-800 shadow-lg dark:shadow-lg">
      <nav className="container mx-auto flex justify-around items-center text-gray-900 dark:text-white">
        <Link href="/" className="mx-2">
          홈
        </Link>
        <Link href="/champions" className="mx-2">
          챔피언 목록
        </Link>
        <Link href="/items" className="mx-2">
          아이템 목록
        </Link>
        <Link href="/rotation" className="mx-2">
          챔피언 로테이션
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default TopNav;
