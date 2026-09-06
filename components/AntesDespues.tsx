"use client";

import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { useState } from "react";

type ComparadorProps = {
    antes: string;
    despues: string;
    titulo: string;
    descripcion: string;
};

function Comparador({
    antes,
    despues,
    titulo,
    descripcion,
}: ComparadorProps) {
    const [posicion, setPosicion] = useState(50);

    return (
        <article className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0f]">
            {/* COMPARADOR */}
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
                {/* ANTES */}
                <Image
                    src={antes}
                    alt={`${titulo} antes`}
                    fill
                    className="object-cover"
                />

                {/* DESPUÉS */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        clipPath: `inset(0 ${100 - posicion}% 0 0)`,
                    }}
                >
                    <Image
                        src={despues}
                        alt={`${titulo} después`}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* ETIQUETAS */}
                <span className="absolute left-4 top-4 z-20 rounded bg-black/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                    Antes
                </span>

                <span className="absolute right-4 top-4 z-20 rounded bg-[#d71920] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Después
                </span>

                {/* LÍNEA CENTRAL */}
                <div
                    className="pointer-events-none absolute bottom-0 top-0 z-20 w-[2px] bg-white"
                    style={{ left: `${posicion}%` }}
                >
                    <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#090909] shadow-xl">
                        <MoveHorizontal size={18} />
                    </div>
                </div>

                {/* RANGE INVISIBLE */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={posicion}
                    onChange={(e) => setPosicion(Number(e.target.value))}
                    aria-label={`Comparar antes y después de ${titulo}`}
                    className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-black/65 to-transparent" />
            </div>

            {/* TEXTO */}
            <div className="p-6 sm:p-7">
                <div className="mb-4 h-[2px] w-8 bg-[#d71920]" />

                <h3 className="text-xl font-black uppercase tracking-tight text-white">
                    {titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {descripcion}
                </p>
            </div>
        </article>
    );
}

export default function AntesDespues() {
    return (
        <section
            id="resultados"
            className="relative overflow-hidden border-y border-white/10 bg-[#0a0a0b] py-24"
        >
            {/* LUZ AMBIENTAL */}
            <div className="pointer-events-none absolute right-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-[#d71920]/5 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                {/* CABECERA */}
                <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-[#d71920]" />

                            <span className="text-xs font-bold uppercase tracking-[0.32em] text-[#d71920]">
                                Antes & Después
                            </span>
                        </div>

                        <h2 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                            Cada detalle
                            <br />
                            <span className="text-zinc-500">
                                marca la diferencia.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-lg text-sm leading-7 text-zinc-400">
                            Desde rincones difíciles hasta ruedas y ópticos,
                            mostramos resultados reales donde el cambio se puede
                            ver de cerca.
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                            <MoveHorizontal
                                size={16}
                                className="text-[#d71920]"
                            />
                            Desliza para comparar
                        </div>
                    </div>
                </div>

                {/* 3 CASOS DE ANTES & DESPUÉS */}
                <div className="grid gap-5 lg:grid-cols-2">
                    <Comparador
                        antes="/esquinas_sucias.png"
                        despues="/esquinas_limpias.png"
                        titulo="Donde otros no llegan"
                        descripcion="Suciedad acumulada alrededor de molduras, cámaras, uniones y espacios reducidos. El detalle también está ahí."
                    />

                    <Comparador
                        antes="/rueda_sucia.png"
                        despues="/rueda_limpia.png"
                        titulo="Cada superficie cuenta"
                        descripcion="Llantas, neumáticos y zonas expuestas recuperan una apariencia limpia y cuidada con atención en cada terminación."
                    />
                </div>

                {/* TERCER CASO: ÓPTICOS — ahora con slider también */}
                <div className="mt-5 lg:max-w-[calc(50%-10px)]">
                    <Comparador
                        antes="/focos_limpios.png"
                        despues="/focos_antes.png"
                        titulo="Pulido de ópticos"
                        descripcion="Ópticos opacos y deteriorados recuperan claridad, transparencia y una apariencia mucho más limpia y cuidada."
                    />
                </div>

                {/* FRASE FINAL */}
                <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
                    <div>
                        <p className="text-lg font-bold text-white">
                            No es solamente limpiar.
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                            Es transformar cada superficie con atención en los
                            detalles.
                        </p>
                    </div>

                    <a
                        href="#cotizar"
                        className="rounded-md border border-[#d71920] px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#d71920]"
                    >
                        Quiero cotizar mi vehículo
                    </a>
                </div>
            </div>
        </section>
    );
}