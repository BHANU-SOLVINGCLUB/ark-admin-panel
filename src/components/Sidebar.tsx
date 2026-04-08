"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const NAVY = "#061429";
const GOLD = "#D4AF37";

const NAV = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/products", label: "Products", icon: Package },
  { href: "/orders", label: "Orders", icon: ShoppingCart },
  { href: "/professionals", label: "Professionals", icon: Users },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
];

function ArkLogoSvg({ size = 40 }: { size?: number }) {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const r = s * 0.42;
  const r2 = s * 0.33;

  const octPoints = Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 4) * i - Math.PI / 2;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");

  const sqPoints = Array.from({ length: 4 }, (_, i) => {
    const a = (Math.PI / 2) * i - Math.PI / 4;
    return `${cx + r2 * Math.cos(a)},${cy + r2 * Math.sin(a)}`;
  }).join(" ");

  const aTop = cy - s * 0.22;
  const aBottom = cy + s * 0.24;
  const aLeft = cx - s * 0.2;
  const aRight = cx + s * 0.2;
  const aMidY = cy + s * 0.02;
  const aMidLX = cx - s * 0.11;
  const aMidRX = cx + s * 0.11;
  const sw = s * 0.052;
  const sw2 = s * 0.025;

  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
      <polygon points={octPoints} fill="none" stroke={GOLD} strokeWidth={sw2} />
      <polygon points={sqPoints} fill="none" stroke={GOLD} strokeWidth={sw2 * 0.9} />
      <path d={`M${cx} ${aTop} L${aLeft} ${aBottom}`} stroke={GOLD} strokeWidth={sw} strokeLinecap="round" fill="none" />
      <path d={`M${cx} ${aTop} L${aRight} ${aBottom}`} stroke={GOLD} strokeWidth={sw} strokeLinecap="round" fill="none" />
      <path d={`M${aMidLX} ${aMidY} L${aMidRX} ${aMidY}`} stroke={GOLD} strokeWidth={sw * 0.75} strokeLinecap="round" fill="none" />
      <path d={`M${cx} ${aTop} L${cx} ${aBottom + s * 0.02}`} stroke={GOLD} strokeWidth={sw * 0.5} strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItemClass =
    "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all min-h-11";

  const renderNavItems = (closeOnClick = false) =>
    NAV.map(({ href, label, icon: Icon }) => {
      const active = pathname === href;
      return (
        <Link
          key={href}
          href={href}
          onClick={() => {
            if (closeOnClick) setIsOpen(false);
          }}
          className={navItemClass}
          style={{
            backgroundColor: active ? GOLD : "transparent",
            color: active ? NAVY : "rgba(255,255,255,0.6)",
          }}
        >
          <Icon size={17} />
          {label}
        </Link>
      );
    });

  return (
    <>
      <header
        className="md:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3 border-b border-white/10"
        style={{ backgroundColor: NAVY }}
      >
        <div className="flex items-center gap-2.5">
          <div className="rounded-xl overflow-hidden flex-shrink-0" style={{ backgroundColor: NAVY, border: `1px solid ${GOLD}33` }}>
            <ArkLogoSvg size={30} />
          </div>
          <p className="text-white font-black text-xs leading-tight tracking-wider">ARK ASSURED</p>
        </div>
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 rounded-lg"
          style={{ color: GOLD }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/35"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 z-50 w-64 min-h-screen flex flex-col transform transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{ backgroundColor: NAVY }}
      >
        {/* Logo */}
        <div className="px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="rounded-xl overflow-hidden flex-shrink-0" style={{ backgroundColor: NAVY, border: `1px solid ${GOLD}33` }}>
              <ArkLogoSvg size={40} />
            </div>
            <div>
              <p className="text-white font-black text-sm leading-tight tracking-wider">ARK ASSURED</p>
              <p style={{ color: GOLD, fontSize: 9, letterSpacing: 2, fontWeight: 700, marginTop: 1 }}>THE SEAL OF TRUST</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">{renderNavItems(true)}</nav>

        {/* Sign out */}
        <div className="px-3 pb-5">
          <div className="border-t border-white/10 pt-4">
            <button
              className={`${navItemClass} w-full`}
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <LogOut size={17} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
