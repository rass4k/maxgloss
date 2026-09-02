import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative flex min-h-[760px] items-center overflow-hidden bg-black lg:min-h-screen"
        >
            {/* FOTO REAL */}
            <div
                className="absolute inset-0 bg-cover bg-[72%_center] sm:bg-[65%_center] lg:bg-center"
                style={{
                    backgroundImage: "url('/mazda-banner.png')",
                }}
            />

            {/* OSCURECIMIENTO GENERAL */}
            <div className="absolute inset-0 bg-black/15" />

            {/* DEGRADADO PARA TEXTO */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

            {/* SOMBRA INFERIOR */}
            <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-transparent" />

            {/* TOQUE ROJO SUPERIOR */}
            <div className="absolute left-0 top-[82px] h-px w-full bg-gradient-to-r from-[#d71920] via-[#d71920]/30 to-transparent" />

            {/* CONTENIDO */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 lg:px-8">
                <div className="max-w-[650px]">

                    {/* MINI TITULO */}
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-[2px] w-9 bg-[#d71920]" />

                        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#e02229]">
                            Max Gloss
                        </p>
                    </div>

                    {/* TITULO */}
                    <h1 className="text-[48px] font-black uppercase leading-[0.94] tracking-[-0.045em] text-white sm:text-[62px] lg:text-[78px]">
                        Recuperamos
                        <br />
                        el brillo de
                        <br />
                        <span className="text-[#d71920]">tu auto.</span>
                    </h1>

                    {/* SUBTITULO */}
                    <p className="mt-7 max-w-[540px] text-base leading-7 text-zinc-300 sm:text-lg">
                        Car Detailing & Ceramic Coating.
                        <br className="hidden sm:block" />
                        Cuidamos cada detalle para recuperar, proteger y realzar tu vehículo.
                    </p>

                    {/* BOTONES */}
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="#cotizar"
                            className="group flex items-center justify-center gap-2 rounded-md bg-[#d71920] px-7 py-4 text-sm font-bold uppercase tracking-wide transition duration-300 hover:bg-[#ef242c]"
                        >
                            <MessageCircle size={19} />

                            Cotizar por WhatsApp
                        </Link>

                        <Link
                            href="#trabajos"
                            className="group flex items-center justify-center gap-2 rounded-md border border-white/30 bg-black/20 px-7 py-4 text-sm font-bold uppercase tracking-wide backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white/5"
                        >
                            Ver trabajos

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    {/* MINI ATRIBUTOS */}
                    <div className="mt-12 flex max-w-[520px] flex-wrap gap-x-8 gap-y-5 border-t border-white/15 pt-6">
                        <div>
                            <p className="text-sm font-bold text-white">
                                Detalle
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                                Cada rincón importa
                            </p>
                        </div>

                        <div className="hidden h-9 w-px bg-white/10 sm:block" />

                        <div>
                            <p className="text-sm font-bold text-white">
                                Protección
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                                Cuidado profesional
                            </p>
                        </div>

                        <div className="hidden h-9 w-px bg-white/10 sm:block" />

                        <div>
                            <p className="text-sm font-bold text-white">
                                Resultado
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                                Trabajos reales
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}