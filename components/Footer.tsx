import Image from "next/image";
import {
    MessageCircle,
    MapPin,
    CalendarClock,
} from "lucide-react";

export default function Footer() {
    return (
        <footer
            id="contacto"
            className="border-t border-white/10 bg-[#050505]"
        >
            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* MARCA */}
                    <div>
                        <Image
                            src="/logo.png"
                            alt="MaxGloss"
                            width={100}
                            height={100}
                            className="h-20 w-20 object-contain"
                        />

                        <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-500">
                            Car Detailing & Ceramic Coating.
                            Cuidado, protección y detalle para tu vehículo.
                        </p>
                    </div>

                    {/* CONTACTO */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                            Contacto
                        </p>

                        <div className="mt-5 space-y-4">

                            {/* WHATSAPP */}
                            <a
                                href="https://wa.me/56942002181"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 text-sm text-zinc-400 transition hover:text-white"
                            >
                                <MessageCircle
                                    size={17}
                                    className="text-[#d71920]"
                                />

                                +56 9 4200 2181
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="https://www.instagram.com/detailling_maxgloss777/"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-3 text-sm text-zinc-400 transition hover:text-white"
                            >
                                <span
                                    className="h-[17px] w-[17px] shrink-0 bg-[#d71920] transition group-hover:bg-white"
                                    style={{
                                        WebkitMaskImage: "url('/ig.svg')",
                                        maskImage: "url('/ig.svg')",
                                        WebkitMaskRepeat: "no-repeat",
                                        maskRepeat: "no-repeat",
                                        WebkitMaskPosition: "center",
                                        maskPosition: "center",
                                        WebkitMaskSize: "contain",
                                        maskSize: "contain",
                                    }}
                                />

                                @detailling_maxgloss777
                            </a>
                        </div>
                    </div>

                    {/* ZONA */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                            Atención
                        </p>

                        <div className="mt-5 space-y-4">

                            {/* UBICACIÓN */}
                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#d71920]"
                                />

                                <div>
                                    <p className="text-sm text-zinc-300">
                                        Constitución
                                    </p>

                                    <p className="mt-1 text-xs text-zinc-600">
                                        Y alrededores
                                    </p>
                                </div>
                            </div>

                            {/* HORARIO */}
                            <div className="flex items-start gap-3">
                                <CalendarClock
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#d71920]"
                                />

                                <div>
                                    <p className="text-sm text-zinc-300">
                                        Atención con cita previa
                                    </p>

                                    <p className="mt-1 text-xs text-zinc-600">
                                        Coordina tu hora por WhatsApp
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                            ¿Hablamos?
                        </p>

                        <p className="mt-5 text-sm leading-6 text-zinc-500">
                            Cuéntanos qué necesita tu vehículo y coordinemos tu atención.
                        </p>

                        <a
                            href="https://wa.me/56942002181?text=Hola%20MaxGloss%2C%20quisiera%20realizar%20una%20consulta."
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#d71920] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#ee252d]"
                        >
                            <MessageCircle size={17} />

                            Hablar por WhatsApp
                        </a>
                    </div>
                </div>

                {/* PIE INFERIOR */}
                <div className="mt-12 border-t border-white/10 pt-6">
                    <div className="flex flex-col gap-3 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © {new Date().getFullYear()} MaxGloss.
                        </p>

                        <p>
                            Car Detailing & Ceramic Coating
                        </p>
                    </div>

                    <div className="mt-5 text-center">
                        <p className="text-[11px] text-zinc-700">
                            Desarrollado por{" "}
                            <a
                                href="https://devmaule.cl"
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold text-zinc-500 transition hover:text-[#d71920]"
                            >
                                devMaule.cl
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}