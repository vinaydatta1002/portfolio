import type { ReactNode } from "react";

export function Section({
    id,
    eyebrow,
    title,
    children,
}: {
    id: string;
    eyebrow: string;
    title: string;
    children: ReactNode;
}) {
    return (
        <section id={id} className="scroll-mt-24 py-20">
            <div className="mx-auto w-full max-w-5xl px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                    {eyebrow}
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
                    {title}
                </h2>
                <div className="mt-10">{children}</div>
            </div>
        </section>
    );
}
