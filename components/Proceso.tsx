import Image from "next/image";
import { Check } from "lucide-react";

const puntos = [
    "Trabajo enfocado en los detalles",
    "Tratamiento según cada superficie",
    "Cuidado durante todo el proceso",
];

export default function Proceso() {
    return (
        <section className="relative overflow-hidden bg-[#070707] py-24">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e10] lg:grid-cols-2">

                    {/* IMAGEN */}
                    <div className="relative min-h-[430px] lg:min-h-[620px]">
                        <Image
                            src="/auto1.1.png"
                            alt="Proceso de detailing Max Gloss"
                            fill
                            className="object-cover"
                        />

                        {/* sombra para integrar */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0e0e10]/30" />

                        {/* etiqueta */}
                        <div className="absolute bottom-5 left-5 rounded-md border border-white/15 bg-black/70 px-4 py-2 backdrop-blur-md">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                                Trabajo real
                            </span>
                        </div>
                    </div>

                    {/* CONTENIDO */}
                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-[#d71920]" />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#d71920]">
                                Nuestro proceso
                            </span>
                        </div>

                        <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl">
                            El resultado
                            <br />
                            está en el
                            <br />
                            <span className="text-zinc-500">proceso.</span>
                        </h2>

                        <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
                            Un buen detailing no empieza cuando el auto brilla.
                            Empieza en la preparación, en la técnica y en prestar
                            atención a cada superficie del vehículo.
                        </p>

                        {/* PUNTOS */}
                        <div className="mt-8 space-y-4">
                            {puntos.map((punto) => (
                                <div
                                    key={punto}
                                    className="flex items-center gap-4 border-b border-white/10 pb-4"
                                >
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d71920]/60 bg-[#d71920]/10">
                                        <Check size={14} className="text-[#e1262d]" />
                                    </div>

                                    <p className="text-sm font-medium text-zinc-300">
                                        {punto}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* FRASE */}
                        <div className="mt-9 border-l-2 border-[#d71920] pl-5">
                            <p className="text-lg font-semibold leading-7 text-white">
                                No buscamos que se vea limpio.
                                <br />
                                Buscamos que se note el trabajo.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}