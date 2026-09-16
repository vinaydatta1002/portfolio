import { achievements, education } from "@/data/resume";

export function Education() {
    return (
        <div className="space-y-12">
            {/* Education */}
            <div className="space-y-6">
                {education.map((item) => (
                    <article
                        key={item.school}
                        className="group relative rounded-2xl glass-effect p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-[1.02]"
                    >
                        {/* Gradient glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />

                        <div className="flex items-start gap-4">
                            {/* University Icon */}
                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-slate-300">
                                        {item.school}
                                    </h3>
                                    <span className="inline-flex items-center gap-1.5 rounded-full glass-effect px-3 py-1 font-mono text-xs text-slate-300 shadow-md">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {item.period}
                                    </span>
                                </div>
                                <p className="text-base text-slate-300 mb-2 font-medium">{item.degree}</p>
                                <p className="text-sm text-slate-500 flex items-center gap-1">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {item.location}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Awards & Achievements */}
            <div className="rounded-2xl glass-effect p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                        Awards & Recognition
                    </h3>
                </div>

                <div className="space-y-6">
                    {achievements.map((item) => (
                        <article
                            key={item.title}
                            className="group relative rounded-xl glass-effect p-6 shadow-md transition-all hover:shadow-xl hover:scale-[1.02]"
                        >
                            {/* Trophy Icon & Title */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h4 className="flex-1 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                                    {item.title}
                                </h4>
                            </div>

                            {/* Description */}
                            <p className="text-sm leading-relaxed text-slate-300 pl-14">
                                {item.description}
                            </p>

                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
