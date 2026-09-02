"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu } from "lucide-react";
import { useState } from "react";

const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Resultados", href: "#resultados" },
    { label: "Trabajos", href: "#trabajos" },
    { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
            <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 lg:px-8">

                {/* LOGO */}
                <Link href="#inicio" className="relative flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Max Gloss"
                        width={90}
                        height={90}
                        priority
                        className="h-[68px] w-[68px] object-contain"
                    />
                </Link>

                {/* MENÚ DESKTOP */}
                <nav className="hidden items-center gap-9 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-300 transition hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* WHATSAPP DESKTOP */}
                <Link
                    href="#cotizar"
                    className="hidden items-center gap-2 rounded-md border border-[#d71920] px-5 py-3 text-xs font-bold uppercase tracking-wide transition duration-300 hover:bg-[#d71920] md:flex"
                >
                    <MessageCircle size={17} />
                    Cotizar
                </Link>

                {/* MOBILE */}
                <button
                    onClick={() => setOpen(!open)}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 md:hidden"
                    aria-label="Abrir menú"
                >
                    <Menu size={22} />
                </button>
            </div>

            {/* MENÚ MOBILE */}
            {open && (
                <div className="border-t border-white/10 bg-[#080808] px-5 py-6 md:hidden">
                    <nav className="flex flex-col gap-5">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-sm font-semibold uppercase tracking-wide text-zinc-300"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="#cotizar"
                            onClick={() => setOpen(false)}
                            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#d71920] px-5 py-3 text-sm font-bold"
                        >
                            <MessageCircle size={18} />
                            Cotizar
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}