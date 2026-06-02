import AnimateOnScroll from './AnimateOnScroll';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <AnimateOnScroll className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">{title}</h2>
      {subtitle && (
        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </AnimateOnScroll>
  );
}
