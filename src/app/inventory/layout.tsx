"use client";
import InventoryNavbar from "@/components/inventory/inventoryNavbar";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const token = Cookies.get("token");
  // const router = useRouter();
  // if (!token) router.push("/");
  return (
    <>
      <InventoryNavbar />
      <main className="px-5 py-2">{children}</main>
    </>
  );
}
