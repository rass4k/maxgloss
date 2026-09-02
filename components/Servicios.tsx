import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const servicios = [
    {
        numero: "01",
        titulo: "Car Detailing",
        descripcion:
            "Limpieza y recuperación profunda del vehículo, cuidando cada superficie y cada rincón.",
        imagen: "/auto1.1.png",
    },
    {
        numero: "02",
        titulo: "Pulido de pintura",
        descripcion:
            "Recuperamos profundidad y brillo, reduciendo marcas, opacidad e imperfecciones superficiales.",
        imagen: "/auto2.2.png",
    },
    {
        numero: "03",
        titulo: "Recubrimiento cerámico",
        descripcion:
            "Protección para la pintura con un acabado brillante y una superficie más fácil de mantener.",
        imagen: "/mazda.png",
    },
    {
        numero: "04",
        titulo: "Pulido de ópticos",
        descripcion:
            "Recuperamos la transparencia y apariencia de ópticos afectados por el uso y el paso del tiempo.",
        imagen: "/auto2.png",
    },
];

export default function Servicios() {
    return (
        <section
            id="servicios"
            className="relative overflow-hidden bg-[#070707] py-24"
        >
            {/* Luz roja ambiental */}
            <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#d71920]/5 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                {/* CABECERA */}
                <Reveal>
                    <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-[#d71920]" />

                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#dc1f26]">
                                    Nuestros servicios
                                </p>
                            </div>

                            <h2 className="max-w-xl text-4xl font-black uppercase leading-none tracking-[-0.03em] text-white sm:text-5xl">
                                Cuidado pensado
                                <br />
                                para{" "}
                                <span className="text-zinc-500">
                                    cada detalle.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-zinc-400">
                            Desde una limpieza profunda hasta protección de pintura,
                            trabajamos cada vehículo según lo que realmente necesita.
                        </p>
                    </div>
                </Reveal>

                {/* SERVICIOS */}
                <div className="grid gap-4 md:grid-cols-2">
                    {servicios.map((servicio, index) => (
                        <Reveal
                            key={servicio.titulo}
                            delay={index * 100}
                            className="h-full"
                        >
                            <article className="group relative h-full min-h-[430px] overflow-hidden rounded-xl border border-white/10 bg-[#111]">
                                {/* FOTO */}
                                <Image
                                    src={servicio.imagen}
                                    alt={servicio.titulo}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                                />

                                {/* CAPA OSCURA */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />

                                {/* HOVER ROJO */}
                                <div className="absolute inset-0 bg-[#d71920]/0 transition duration-500 group-hover:bg-[#d71920]/5" />

                                {/* NÚMERO */}
                                <div className="absolute right-5 top-5">
                                    <span className="text-xs font-bold tracking-[0.2em] text-white/50">
                                        {servicio.numero}
                                    </span>
                                </div>

                                {/* CONTENIDO */}
                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                    <div className="mb-4 h-[2px] w-9 bg-[#d71920] transition-all duration-300 group-hover:w-16" />

                                    <div className="flex items-end justify-between gap-5">
                                        <div>
                                            <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                                                {servicio.titulo}
                                            </h3>

                                            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">
                                                {servicio.descripcion}
                                            </p>
                                        </div>

                                        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:border-[#d71920] group-hover:bg-[#d71920] sm:flex">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                {/* CIERRE */}
                <Reveal delay={150}>
                    <div className="mt-10 border-t border-white/10 pt-7">
                        <p className="text-center text-sm text-zinc-500">
                            ¿No sabes qué tratamiento necesita tu vehículo?{" "}
                            <a
                                href="#cotizar"
                                className="font-semibold text-white underline decoration-[#d71920] underline-offset-4 transition hover:text-[#e5262d]"
                            >
                                Cuéntanos y te orientamos.
                            </a>
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}