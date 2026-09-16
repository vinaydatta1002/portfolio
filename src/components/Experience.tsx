"use client";

import { experience } from "@/data/resume";

export function Experience() {
    return (
        <div className="space-y-8">
            {experience.map((job, index) => (
                <article
                    key={`${job.company}-${job.role}`}
                    className="group relative rounded-2xl glass-effect p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-[1.02]"
                >
                    {/* Gradient Border Effect on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />

                    {/* Company Logo Placeholder & Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {job.company.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-slate-300">
                                        {job.role}
                                    </h3>
                                    <p className="text-sky-400 font-semibold flex items-center gap-2 mt-1">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        {job.company}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                            <span className="inline-flex items-center gap-1.5 rounded-full glass-effect px-3 py-1 font-mono text-xs text-slate-300 shadow-md">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {job.period}
                            </span>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {job.location}
                            </span>
                            <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                                {job.employmentType}
                            </span>
                        </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                        {job.highlights.map((point, i) => (
                            <li
                                key={i}
                                className="group/item flex gap-3 text-sm leading-relaxed text-slate-300 hover:text-slate-100 transition-colors"
                            >
                                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-sky-400 to-indigo-400 group-hover/item:scale-150 transition-transform"></span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {job.tech.map((item) => (
                            <span
                                key={item}
                                className="group/tag relative overflow-hidden rounded-lg bg-gradient-to-br from-sky-500/10 to-indigo-500/10 px-3 py-1.5 font-mono text-xs text-sky-300 ring-1 ring-sky-500/20 transition-all hover:ring-sky-400/40 hover:scale-105 hover:shadow-md"
                            >
                                <span className="relative z-10">{item}</span>
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-indigo-400/20 opacity-0 group-hover/tag:opacity-100 transition-opacity" />
                            </span>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
}
