"use client";

import { certifications, languages, skills, topSkills } from "@/data/resume";

export function Skills() {
    return (
        <div className="space-y-12">
            {/* Top Skills Highlight */}
            <div className="rounded-2xl glass-effect p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                        Core Competencies
                    </h3>
                </div>
                <ul className="flex flex-wrap gap-3">
                    {topSkills.map((item) => (
                        <li
                            key={item}
                            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 px-5 py-2.5 text-sm font-semibold text-amber-200 ring-2 ring-amber-500/30 transition-all hover:ring-amber-400/50 hover:scale-105 hover:shadow-lg"
                        >
                            <span className="relative z-10">{item}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Skills Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((group, index) => (
                    <article
                        key={group.category}
                        className="group relative rounded-2xl glass-effect p-6 shadow-lg transition-all hover:shadow-2xl hover:scale-105"
                    >
                        {/* Gradient glow on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />

                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold shadow-md">
                                {index + 1}
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
                                {group.category}
                            </h3>
                        </div>

                        <ul className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li
                                    key={item}
                                    className="group/item relative overflow-hidden rounded-md bg-gradient-to-br from-sky-500/10 to-indigo-500/10 px-2.5 py-1.5 font-mono text-xs text-sky-300 ring-1 ring-sky-500/20 transition-all hover:ring-sky-400/40 hover:scale-110 hover:shadow-md"
                                >
                                    <span className="relative z-10">{item}</span>
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-indigo-400/20 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>

            {/* Certifications */}
            <div className="rounded-2xl glass-effect p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                        Professional Certifications
                    </h3>
                </div>
                <ul className="space-y-4">
                    {certifications.map((cert) => (
                        <li
                            key={cert.name}
                            className="group relative rounded-xl glass-effect p-5 shadow-md transition-all hover:shadow-xl hover:scale-[1.02]"
                        >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex-1">
                                    <h4 className="text-base font-bold text-slate-100 mb-1">
                                        {cert.name}
                                    </h4>
                                    <p className="text-sm text-slate-400 mb-2">{cert.issuer}</p>
                                    <p className="text-xs text-slate-500 font-mono">{cert.period}</p>
                                </div>
                                {cert.url && (
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Verify
                                    </a>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Languages */}
            <div className="rounded-2xl glass-effect p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Languages
                    </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                    {languages.map((item) => (
                        <li
                            key={item}
                            className="rounded-md glass-effect px-3 py-1.5 text-sm text-slate-300 ring-1 ring-white/10 transition-all hover:ring-white/30 hover:scale-105"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
