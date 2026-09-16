"use client";

import { useEffect, useState } from "react";
import { profile, stats } from "@/data/resume";
import { asset } from "@/lib/paths";

export function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="top" className="relative overflow-hidden pt-32 pb-24">
            {/* Animated Background Effects */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-purple-500/20 blur-3xl animate-pulse-glow"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute top-20 right-0 h-[30rem] w-[30rem] rounded-full bg-gradient-to-bl from-purple-500/20 via-pink-500/10 to-transparent blur-3xl"
            />

            <div className={`relative mx-auto w-full max-w-6xl px-6 ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                {/* Status Badge */}
                <div className={`inline-flex items-center gap-2 rounded-full glass-effect px-4 py-2 text-xs font-medium text-emerald-300 shadow-lg ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    Available for opportunities · {profile.workPreference}
                </div>

                {/* Main Heading */}
                <h1 className={`mt-8 text-5xl font-bold tracking-tight text-slate-50 sm:text-7xl ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                    {profile.name}
                </h1>

                {/* Role with Gradient */}
                <p className={`mt-4 text-2xl font-bold gradient-text sm:text-3xl ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                    {profile.role}
                </p>

                {/* Tech Stack */}
                <p className={`mt-3 font-mono text-sm text-sky-400 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                    {profile.headline}
                </p>

                {/* Tagline */}
                <p className={`mt-8 max-w-3xl text-xl leading-relaxed text-slate-300 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                    {profile.tagline}
                </p>

                {/* CTA Buttons */}
                <div className={`mt-10 flex flex-wrap gap-4 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                    <a
                        href={`mailto:${profile.email}`}
                        className="group relative overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/50 transition-all hover:shadow-xl hover:shadow-sky-500/60 hover:scale-105"
                    >
                        <span className="relative z-10">Let&apos;s Connect</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                        href={asset(profile.resumeFile)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-full glass-effect px-8 py-3.5 text-sm font-semibold text-slate-200 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </span>
                    </a>
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full glass-effect px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:scale-105 hover:border-slate-500"
                    >
                        GitHub
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full glass-effect px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:scale-105 hover:border-slate-500"
                    >
                        LinkedIn
                    </a>
                </div>

                {/* Stats Grid */}
                <div className={`mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4 ${mounted ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="group relative overflow-hidden rounded-2xl glass-effect p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <dt className="relative z-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-400 sm:text-4xl">
                                {stat.value}
                            </dt>
                            <dd className="relative z-10 mt-2 text-sm leading-relaxed text-slate-400 font-medium">
                                {stat.label}
                            </dd>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
