export function SectionDivider() {
    return (
        <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
            {/* Neural Network Pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Connecting Lines */}
                <svg className="w-full h-full opacity-20" viewBox="0 0 800 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
                            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Horizontal Line */}
                    <line x1="0" y1="50" x2="800" y2="50" stroke="url(#lineGradient)" strokeWidth="1" />

                    {/* Neural Connection Pattern */}
                    <g className="animate-pulse-slow">
                        <circle cx="200" cy="50" r="3" fill="#22d3ee" opacity="0.6" />
                        <circle cx="400" cy="50" r="4" fill="#a78bfa" opacity="0.8" />
                        <circle cx="600" cy="50" r="3" fill="#22d3ee" opacity="0.6" />

                        {/* Connection Lines */}
                        <line x1="200" y1="50" x2="400" y2="50" stroke="#a78bfa" strokeWidth="0.5" opacity="0.3" />
                        <line x1="400" y1="50" x2="600" y2="50" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3" />
                    </g>
                </svg>
            </div>

            {/* Center Icon */}
            <div className="relative z-10 bg-surface-300 px-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-500/20 to-ice-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    {/* Neuron Icon */}
                    <svg className="w-5 h-5 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export function GeometricDivider() {
    return (
        <div className="relative w-full h-16 flex items-center justify-center overflow-hidden">
            {/* Geometric Pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full opacity-10" viewBox="0 0 1200 80" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="geometricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
                            <stop offset="20%" stopColor="#a78bfa" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                            <stop offset="80%" stopColor="#a78bfa" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Diamond Pattern */}
                    <g fill="url(#geometricGradient)">
                        <polygon points="200,40 220,30 240,40 220,50" />
                        <polygon points="400,40 420,30 440,40 420,50" />
                        <polygon points="600,40 620,30 640,40 620,50" />
                        <polygon points="800,40 820,30 840,40 820,50" />
                        <polygon points="1000,40 1020,30 1040,40 1020,50" />
                    </g>

                    {/* Connecting Lines */}
                    <line x1="0" y1="40" x2="1200" y2="40" stroke="url(#geometricGradient)" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
            </div>
        </div>
    );
}
