interface DecorativeBackgroundProps {
  variant?: 'default' | 'services' | 'benefits';
}

export default function DecorativeBackground({ variant = 'default' }: DecorativeBackgroundProps) {
  const configs: Record<string, { position: string; color: string; opacity: string }[]> = {
    default: [
      { position: '-top-24 -right-24', color: 'bg-blue-100', opacity: 'opacity-50' },
      { position: 'top-1/2 -left-24', color: 'bg-emerald-100', opacity: 'opacity-30' },
    ],
    benefits: [
      { position: '-top-24 -left-24', color: 'bg-emerald-100', opacity: 'opacity-40' },
      { position: 'top-1/2 -right-24', color: 'bg-blue-100', opacity: 'opacity-30' },
    ],
  };

  const circles = configs[variant] || configs.default;

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
      {circles.map((circle, i) => (
        <div
          key={i}
          className={`absolute ${circle.position} w-96 h-96 ${circle.color} rounded-full mix-blend-multiply filter blur-3xl ${circle.opacity}`}
        />
      ))}
    </div>
  );
}
