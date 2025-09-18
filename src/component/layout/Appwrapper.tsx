import { Outlet } from "react-router";
import Header from "./header";

export default function MainApplication() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
