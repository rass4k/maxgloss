"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Car,
    Check,
    MessageCircle,
    RotateCcw,
} from "lucide-react";

const categoriasServicios = [
    {
        categoria: "Lavado",
        servicios: [
            "Lavado exterior",
            "Lavado interior",
            "Lavado completo",
            "Lavado premium",
        ],
    },
    {
        categoria: "Detailing",
        servicios: [
            "Car Detailing",
            "Detailing interior",
            "Detailing exterior",
            "Detailing completo",
        ],
    },
    {
        categoria: "Pintura y protección",
        servicios: [
            "Pulido de pintura",
            "Recubrimiento cerámico",
        ],
    },
    {
        categoria: "Otros",
        servicios: [
            "Pulido de ópticos",
            "Limpieza de motor",
            "Limpieza de llantas",
            "Necesito recomendación",
        ],
    },
];

const vehiculos = ["Hatchback", "Sedán", "SUV", "Camioneta", "Otro"];

/*
 * IMPORTANTE:
 * Guarda estas imágenes dentro de:
 * public/hatchback/
 *
 * Puedes cambiar los nombres aquí si tus archivos se llaman distinto.
 */
const vistasPorVehiculo: Record<
    string,
    { src: string; alt: string; label: string }[]
> = {
    Hatchback: [
        {
            src: "/hatchback/01-frontal.png",
            alt: "Hatchback vista frontal",
            label: "Frontal",
        },
        {
            src: "/hatchback/02-frontal-derecha.png",
            alt: "Hatchback vista frontal derecha",
            label: "Frontal derecha",
        },
        {
            src: "/hatchback/03-lateral-derecho.png",
            alt: "Hatchback vista lateral derecha",
            label: "Lateral",
        },
        {
            src: "/hatchback/04-trasera-derecha.png",
            alt: "Hatchback vista trasera derecha",
            label: "Trasera derecha",
        },
        {
            src: "/hatchback/05-trasera.png",
            alt: "Hatchback vista trasera",
            label: "Trasera",
        },
        {
            src: "/hatchback/06-lateral-izquierdo.png",
            alt: "Hatchback vista lateral izquierda",
            label: "Lateral izquierda",
        },
    ],
};

function VehicleCarousel({ vehiculo }: { vehiculo: string }) {
    const vistas = useMemo(() => vistasPorVehiculo[vehiculo] ?? [], [vehiculo]);
    const [indice, setIndice] = useState(0);
    const [pausado, setPausado] = useState(false);

    useEffect(() => {
        setIndice(0);
    }, [vehiculo]);

    useEffect(() => {
        if (vistas.length <= 1 || pausado) return;

        const interval = window.setInterval(() => {
            setIndice((prev) => (prev + 1) % vistas.length);
        }, 3200);

        return () => window.clearInterval(interval);
    }, [vistas.length, pausado]);

    if (!vehiculo) return null;

    if (vistas.length === 0) {
        return (
            <div className="mt-4 rounded-xl border border-white/10 bg-[#09090a] px-5 py-8 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <Car size={20} className="text-zinc-500" />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                    {vehiculo}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                    Vista del vehículo próximamente.
                </p>
            </div>
        );
    }

    const anterior = () =>
        setIndice((prev) => (prev - 1 + vistas.length) % vistas.length);

    const siguiente = () =>
        setIndice((prev) => (prev + 1) % vistas.length);

    const vistaActual = vistas[indice];

    return (
        <div
            className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#080809]"
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
        >
            {/* brillo ambiental */}
            <div className="pointer-events-none absolute left-1/2 top-[58%] h-32 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d71920]/10 blur-3xl" />

            <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#d71920]/10">
                        <RotateCcw size={14} className="text-[#d71920]" />
                    </div>

                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-300">
                            Vista del vehículo
                        </p>
                        <p className="text-[10px] text-zinc-600">
                            Cambia automáticamente
                        </p>
                    </div>
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold text-zinc-400">
                    {indice + 1} / {vistas.length}
                </span>
            </div>

            <div className="relative h-[230px] sm:h-[285px]">
                {/* líneas decorativas */}
                <div className="pointer-events-none absolute inset-x-[12%] bottom-[18%] h-px bg-gradient-to-r from-transparent via-[#d71920]/35 to-transparent" />
                <div className="pointer-events-none absolute left-1/2 bottom-[12%] h-10 w-[58%] -translate-x-1/2 rounded-[50%] border border-[#d71920]/15 blur-[1px]" />

                <Image
                    key={vistaActual.src}
                    src={vistaActual.src}
                    alt={vistaActual.alt}
                    fill
                    priority={indice === 0}
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="select-none object-contain px-12 py-5 drop-shadow-[0_0_18px_rgba(255,255,255,0.05)] vehicle-fade"
                    draggable={false}
                />

                <button
                    type="button"
                    onClick={anterior}
                    aria-label="Vista anterior"
                    className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur transition hover:border-[#d71920]/60 hover:bg-[#d71920]/10"
                >
                    <ArrowLeft size={17} />
                </button>

                <button
                    type="button"
                    onClick={siguiente}
                    aria-label="Vista siguiente"
                    className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur transition hover:border-[#d71920]/60 hover:bg-[#d71920]/10"
                >
                    <ArrowRight size={17} />
                </button>

                <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 backdrop-blur">
                    <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-300">
                        {vistaActual.label}
                    </p>
                </div>
            </div>

            <div className="relative z-10 flex items-center justify-center gap-2 border-t border-white/[0.06] px-4 py-3">
                {vistas.map((vista, i) => (
                    <button
                        key={vista.src}
                        type="button"
                        aria-label={`Ver ${vista.label}`}
                        onClick={() => setIndice(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === indice
                                ? "w-7 bg-[#d71920]"
                                : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                            }`}
                    />
                ))}
            </div>

            <style jsx>{`
                .vehicle-fade {
                    animation: vehicleFade 360ms ease both;
                }

                @keyframes vehicleFade {
                    from {
                        opacity: 0;
                        transform: scale(0.975) translateX(8px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateX(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default function Cotizador() {
    const [vehiculo, setVehiculo] = useState("");
    const [serviciosSeleccionados, setServiciosSeleccionados] = useState<
        string[]
    >([]);
    const [detalle, setDetalle] = useState("");

    const toggleServicio = (servicio: string) => {
        setServiciosSeleccionados((prev) =>
            prev.includes(servicio)
                ? prev.filter((item) => item !== servicio)
                : [...prev, servicio]
        );
    };

    const enviarWhatsApp = () => {
        if (!vehiculo || serviciosSeleccionados.length === 0) {
            alert("Selecciona tu vehículo y al menos un servicio.");
            return;
        }

        const serviciosTexto = serviciosSeleccionados
            .map((item) => `• ${item}`)
            .join("\n");

        const mensaje = `Hola Max Gloss 👋

Quisiera realizar una cotización.

🚗 Vehículo: ${vehiculo}

✨ Servicios:
${serviciosTexto}

${detalle ? `📝 Comentario: ${detalle}` : ""}

¿Me pueden indicar valor y disponibilidad?`;

        const telefono = "";

        const url = telefono
            ? `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`
            : `https://wa.me/?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <section
            id="cotizar"
            className="relative overflow-hidden border-t border-white/10 bg-[#09090a] py-20"
        >
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#d71920]/5 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                    {/* IZQUIERDA */}
                    <div className="lg:sticky lg:top-28">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-[#d71920]" />

                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d71920]">
                                Cotiza tu vehículo
                            </p>
                        </div>

                        <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl">
                            ¿Qué necesita
                            <br />
                            <span className="text-zinc-500">tu auto?</span>
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
                            Selecciona tu vehículo y los servicios que necesitas.
                            Enviaremos tu solicitud directamente por WhatsApp.
                        </p>

                        <div className="mt-7 border-l-2 border-[#d71920] pl-4">
                            <p className="text-sm font-semibold text-white">
                                Puedes elegir varios servicios.
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                                Si no sabes cuál necesitas, selecciona “Necesito
                                recomendación”.
                            </p>
                        </div>
                    </div>

                    {/* FORMULARIO */}
                    <div className="rounded-2xl border border-white/10 bg-[#111113] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:p-7">
                        {/* HEADER */}
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d71920]/10">
                                <Car size={20} className="text-[#d71920]" />
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-white">
                                    Cotización rápida
                                </h3>

                                <p className="text-xs text-zinc-500">
                                    Solo necesitamos algunos datos.
                                </p>
                            </div>
                        </div>

                        {/* VEHÍCULO */}
                        <div>
                            <label
                                htmlFor="vehiculo"
                                className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500"
                            >
                                Tipo de vehículo
                            </label>

                            <select
                                id="vehiculo"
                                value={vehiculo}
                                onChange={(e) => setVehiculo(e.target.value)}
                                className="mt-2 w-full rounded-md border border-white/10 bg-[#09090a] px-4 py-3 text-sm text-white outline-none transition focus:border-[#d71920]"
                            >
                                <option value="">Selecciona tu vehículo</option>

                                {vehiculos.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>

                            <VehicleCarousel vehiculo={vehiculo} />
                        </div>

                        {/* SERVICIOS */}
                        <div className="mt-7">
                            <div className="flex items-center justify-between gap-4">
                                <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">
                                    Servicios
                                </label>

                                {serviciosSeleccionados.length > 0 && (
                                    <span className="text-[11px] font-semibold text-[#d71920]">
                                        {serviciosSeleccionados.length} seleccionados
                                    </span>
                                )}
                            </div>

                            <div className="mt-4 grid gap-x-5 gap-y-5 md:grid-cols-2">
                                {categoriasServicios.map((grupo) => (
                                    <div key={grupo.categoria}>
                                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">
                                            {grupo.categoria}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {grupo.servicios.map((item) => {
                                                const seleccionado =
                                                    serviciosSeleccionados.includes(item);

                                                return (
                                                    <button
                                                        key={item}
                                                        type="button"
                                                        onClick={() => toggleServicio(item)}
                                                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs transition ${seleccionado
                                                                ? "border-[#d71920] bg-[#d71920]/10 text-white shadow-[0_0_18px_rgba(215,25,32,0.08)]"
                                                                : "border-white/10 bg-[#09090a] text-zinc-400 hover:border-white/30 hover:text-white"
                                                            }`}
                                                    >
                                                        {seleccionado && (
                                                            <Check
                                                                size={12}
                                                                className="text-[#d71920]"
                                                            />
                                                        )}

                                                        {item}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* COMENTARIO */}
                        <div className="mt-6">
                            <label
                                htmlFor="detalle"
                                className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500"
                            >
                                Comentario
                            </label>

                            <textarea
                                id="detalle"
                                value={detalle}
                                onChange={(e) => setDetalle(e.target.value)}
                                placeholder="Ej: Tiene algunas marcas en la pintura..."
                                rows={3}
                                className="mt-2 w-full resize-none rounded-md border border-white/10 bg-[#09090a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d71920]"
                            />
                        </div>

                        {/* BOTÓN */}
                        <button
                            type="button"
                            onClick={enviarWhatsApp}
                            className="group mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[#d71920] px-5 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#ee252d]"
                        >
                            <MessageCircle size={18} />

                            Cotizar por WhatsApp

                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
