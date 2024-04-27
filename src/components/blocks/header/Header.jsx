import React from "react";
import "./style.css";
import Logo from "../../ui/logo/Logo";
import MainTitle from "../../ui/main-title/MainTitle";
import MainNav from "../../ui/main-nav/MainNav";
import UsersNav from "../../ui/users-nav/UsersNav";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <MainTitle />
      <MainNav />
      <UsersNav />
    </header>
  );
}
