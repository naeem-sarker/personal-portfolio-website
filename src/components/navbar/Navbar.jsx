import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link href={"/"}>NAEEM SARKER</Link>
      </div>

      <div className="menu">
        <div className="items">
          <Link href={"/"}>HOME</Link>
        </div>

        <div className="items">
          <Link href={"/about"}>ABOUT</Link>
        </div>

        <div className="items">
          <Link href={"/services"}>SERVICES</Link>
        </div>

        <div className="items">
          <Link href={"/portfolio"}>PORTFOLIO</Link>
        </div>

        <div className="items">
          <Link href={"/blogs"}>BLOG</Link>
        </div>

        <div className="items">
          <Link href={"/contact"}>CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
