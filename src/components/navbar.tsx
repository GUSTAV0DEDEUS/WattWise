import React from "react";

interface INavbarProps { }
const Logo = () => {
  return (
    <div className="flex items-center gap-2 absolute left-4">
      <img src="/vite.svg" alt="logo" />
      <h1 className="text-2xl font-bold">WattWise</h1>
    </div>
  );
}

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <header className="flex justify-center relative mt-4" >
      <Logo/>
      <ul className="flex gap-12">
        <li className="">
            Dashboard
        </li>
        <li className="">
            Payment
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
