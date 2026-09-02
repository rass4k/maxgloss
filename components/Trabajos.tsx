import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const trabajos = [
    {
        imagen: "/auto2.png",
        titulo: "Acabado exterior",
        categoria: "Detailing",
    },
    {
        imagen: "/auto2.1.png",
        titulo: "Detalle de motor",
        categoria: "Limpieza profunda",
    },
    {
        imagen: "/auto2.2.png",
        titulo: "Terminaciones",
        categoria: "Pulido de pintura",
    },
    {
        imagen: "/auto1.png",
        titulo: "Resultado final",
        categoria: "Car Detailing",
    },
];

export default function Trabajos() {
    return (
        <section
            id="trabajos"
            className="relative overflow-hidden bg-[#070707] py-24"
        >
            {/* Luz ambiental */}
            <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#d71920]/5 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                {/* CABECERA */}
                <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-[#d71920]" />

                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d71920]">
                                Trabajos reales
                            </p>
                        </div>

                        <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl">
                            El trabajo
                            <br />
                            <span className="text-zinc-500">
                                habla por sí solo.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-zinc-400">
                        Algunos de los trabajos realizados por Max Gloss,
                        mostrando detalles, terminaciones y resultados reales.
                    </p>
                </div>

                {/* GALERÍA */}
                <div className="grid gap-4 lg:grid-cols-12">
                    {/* FOTO PRINCIPAL */}
                    <article className="group relative min-h-[520px] overflow-hidden rounded-xl border border-white/10 lg:col-span-7">
                        <Image
                            src={trabajos[0].imagen}
                            alt={trabajos[0].titulo}
                            fill
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            className="object-cover transition duration-700 group-hover:scale-[1.03]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d71920]">
                                {trabajos[0].categoria}
                            </p>

                            <div className="mt-2 flex items-end justify-between gap-5">
                                <h3 className="text-2xl font-black uppercase text-white sm:text-3xl">
                                    {trabajos[0].titulo}
                                </h3>

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur transition duration-300 group-hover:border-[#d71920] group-hover:bg-[#d71920]">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* COLUMNA DERECHA */}
                    <div className="grid gap-4 lg:col-span-5">
                        {trabajos.slice(1).map((trabajo) => (
                            <article
                                key={trabajo.imagen}
                                className="group relative min-h-[250px] overflow-hidden rounded-xl border border-white/10"
                            >
                                <Image
                                    src={trabajo.imagen}
                                    alt={trabajo.titulo}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 42vw"
                                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d71920]">
                                        {trabajo.categoria}
                                    </p>

                                    <h3 className="mt-1 text-lg font-black uppercase text-white">
                                        {trabajo.titulo}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center">
                    <div>
                        <p className="text-base font-bold text-white">
                            ¿Quieres ver más trabajos?
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                            Revisa más resultados publicados directamente en Instagram.
                        </p>
                    </div>

                    <a
                        href="https://www.instagram.com/detailling_maxgloss777/"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white transition duration-300 hover:border-[#d71920] hover:bg-[#d71920]"
                    >
                        Ver Instagram

                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}