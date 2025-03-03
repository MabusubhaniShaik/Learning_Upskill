import Link from "next/link";

const HeaderComponent = () => {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about"> about</Link>
        <Link href="/about/3"> Product</Link>
      </nav>
    </div>
  );
};

export default HeaderComponent;
