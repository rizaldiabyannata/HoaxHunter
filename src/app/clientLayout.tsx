"use client";

import MobileNav from "@/components/mobileNav"; // Import sebagai komponen
import { usePathname } from "next/navigation";
import { useBreakpoints } from "@/hooks/useBreakpoint";

export default function ClientLayout() {
  const pathname = usePathname();
  const { isXs, isSm, isMd } = useBreakpoints();
  const hiddenPaths = [
    "/auth",
    "/auth/login",
    "/auth/register",
    "/auth/register/email",
    "/auth/register/phone",
  ];

  const isHiddenPage = hiddenPaths.includes(pathname);

  return (
    <div>
      {(isSm || isXs || isMd) && !isHiddenPage ? (
        <div className="fixed bottom-0">
          <MobileNav />
        </div>
      ) : null}
    </div>
  );
}
