import Image from "next/image";
import {
    ShieldCheck,
    Sparkles,
    Droplets,
    ArrowRight,
} from "lucide-react";

const beneficios = [
    {
        icono: ShieldCheck,
        titulo: "Protección",
        texto:
            "Ayuda a proteger la superficie frente al uso diario y agentes externos.",
    },
    {
        icono: Sparkles,
        titulo: "Más brillo",
        texto:
            "Realza el acabado y entrega una apariencia más profunda y cuidada.",
    },
    {
        icono: Droplets,
        titulo: "Fácil mantenimiento",
        texto:
            "Facilita la limpieza y ayuda a mantener el vehículo en mejores condiciones.",
    },
];

export default function Ceramico() {
    return (
        <section className="relative overflow-hidden bg-[#0a0a0b] py-24">
            <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#d71920]/5 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#111113] lg:grid-cols-[0.9fr_1.1fr]">

                    {/* CONTENIDO IZQUIERDA */}
                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-[#d71920]" />

                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d71920]">
                                Recubrimiento cerámico
                            </p>
                        </div>

                        <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl">
                            Protección que
                            <br />
                            <span className="text-zinc-500">
                                también se ve.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
                            El recubrimiento cerámico ayuda a proteger la pintura,
                            realzar su acabado y facilitar el mantenimiento del vehículo.
                        </p>

                        <div className="mt-8 space-y-5">
                            {beneficios.map((beneficio) => {
                                const Icon = beneficio.icono;

                                return (
                                    <div
                                        key={beneficio.titulo}
                                        className="flex gap-4 border-b border-white/10 pb-5"
                                    >
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#d71920]/20 bg-[#d71920]/10">
                                            <Icon
                                                size={20}
                                                className="text-[#d71920]"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-bold text-white">
                                                {beneficio.titulo}
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-zinc-500">
                                                {beneficio.texto}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <a
                            href="#cotizar"
                            className="group mt-9 inline-flex w-fit items-center gap-2 rounded-md bg-[#d71920] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#ef242c]"
                        >
                            Cotizar tratamiento

                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>
                    </div>

                    {/* IMAGEN DERECHA */}
                    <div className="relative min-h-[430px] lg:min-h-[620px]">
                        <Image
                            src="/mazda.png"
                            alt="Recubrimiento cerámico Max Gloss"
                            fill
                            className="object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#111113]/35" />

                        <div className="absolute bottom-5 right-5 rounded-md border border-white/15 bg-black/70 px-4 py-2 backdrop-blur-md">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                                Ceramic Coating
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}