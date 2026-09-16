"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/resume";
import { asset } from "@/lib/paths";

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const initials = profile.name
        .split(" ")
        .map((part) => part[0])
        .join("");

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled
                    ? "border-b border-white/10 bg-slate-950/80 backdrop-blur"
                    : "border-b border-transparent"
                }`}
        >
            <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
                <a
                    href="#top"
                    className="text-sm font-bold tracking-[0.2em] text-slate-100"
                >
                    {initials}
                </a>

                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm text-slate-400 transition-colors hover:text-sky-400"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={asset(profile.resumeFile)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-sky-500/50 px-4 py-1.5 text-sm font-medium text-sky-300 transition-colors hover:bg-sky-500/10"
                        >
                            Résumé
                        </a>
                    </li>
                </ul>

                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    aria-expanded={open}
                    aria-label="Toggle navigation menu"
                    className="rounded-md p-2 text-slate-300 md:hidden"
                >
                    <span className="block h-0.5 w-5 bg-current" />
                    <span className="mt-1 block h-0.5 w-5 bg-current" />
                    <span className="mt-1 block h-0.5 w-5 bg-current" />
                </button>
            </nav>

            {open && (
                <ul className="space-y-1 border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block py-2 text-sm text-slate-300"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={asset(profile.resumeFile)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 text-sm font-medium text-sky-300"
                        >
                            Résumé
                        </a>
                    </li>
                </ul>
            )}
        </header>
    );
}
