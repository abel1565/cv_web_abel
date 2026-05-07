interface ProjectsProps {
    title: string;
    tecnologies: Array<string>;
    description: string;
    images: Array<string>;
}


export default function Projects({ title, tecnologies, description, images }: ProjectsProps) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div
                id="controls-carousel"
                data-carousel="static"
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 shadow-xl"
            >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-slate-400 font-semibold">
                    {images.map((image) =>
                        (<img src={image} alt="" />))}

                </div>

                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{title}</h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {tecnologies.map((tecno) => (
                            <span
                                key={tecno}
                                className="bg-slate-800 text-cyan-400 text-sm px-3 py-1 rounded-full"
                            >
                                {tecno}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </div>);
}
