interface ExperienceItemProps {
  title: string;
  period: string;
  description: string;
}

export default function ExperienceItem({ title, period, description }: ExperienceItemProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <span className="text-cyan-400 font-semibold">{period}</span>
      </div>
      <p className="text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
