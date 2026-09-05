"use client";

import { useEffect, useMemo, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Car,
    Check,
    Clock3,
    Lock,
    MessageCircle,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

type VistaVehiculo = {
    src: string;
    alt: string;
    label: string;
};

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
        servicios: ["Pulido de pintura", "Recubrimiento cerámico"],
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
] as const;

const vehiculos = ["Hatchback", "Sedán", "SUV", "Camioneta", "Otro"] as const;

const vistasPorVehiculo: Record<string, VistaVehiculo[]> = {
    Hatchback: [],
    "Sedán": [],
    SUV: [
        {
            src: "/suv/suv_frente.png",
            alt: "SUV vista frontal",
            label: "Frente",
        },
        {
            src: "/suv/lateral_derecho.png",
            alt: "SUV vista lateral derecha",
            label: "Lateral derecho",
        },
        {
            src: "/suv/suv_lateral.png",
            alt: "SUV vista lateral",
            label: "Lateral",
        },
        {
            src: "/suv/suv_atras.png",
            alt: "SUV vista trasera",
            label: "Atrás",
        },
        {
            src: "/suv/lateral_izquierdo.png",
            alt: "SUV vista lateral izquierda",
            label: "Lateral izquierdo",
        },
    ],
    Camioneta: [],
    Otro: [],
};

const pasoInfo = [
    { numero: 1, titulo: "Vehículo" },
    { numero: 2, titulo: "Servicios" },
    { numero: 3, titulo: "Confirmar" },
];

function VehicleHeroCarousel({
    vehiculo,
    vistas,
}: {
    vehiculo: string;
    vistas: VistaVehiculo[];
}) {
    const [indice, setIndice] = useState(0);
    const [pausado, setPausado] = useState(false);

    useEffect(() => {
        setIndice(0);
    }, [vehiculo]);

    useEffect(() => {
        if (vistas.length <= 1 || pausado) return;

        const timer = window.setInterval(() => {
            setIndice((prev) => (prev + 1) % vistas.length);
        }, 3400);

        return () => window.clearInterval(timer);
    }, [vistas.length, pausado]);

    if (!vehiculo || !vistas.length) {
        return (
            <div className="relative mt-5 flex min-h-[400px] items-center justify-center overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.015] sm:min-h-[470px] xl:mt-6 xl:min-h-[540px]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,25,32,0.10),transparent_55%)]" />
                <div className="relative text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                        <Car size={24} className="text-zinc-500" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-white">
                        {vehiculo || "Selecciona un vehículo"}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                        Vista del vehículo próximamente.
                    </p>
                </div>
            </div>
        );
    }

    const anterior = () =>
        setIndice((prev) => (prev - 1 + vistas.length) % vistas.length);

    const siguiente = () =>
        setIndice((prev) => (prev + 1) % vistas.length);

    const actual = vistas[indice];
    const previo = vistas[(indice - 1 + vistas.length) % vistas.length];
    const siguienteVista = vistas[(indice + 1) % vistas.length];

    return (
        <div
            className="relative mt-5 min-h-[400px] overflow-visible sm:min-h-[470px] xl:mt-6 xl:min-h-[540px]"
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-[50%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d71920]/10 sm:h-[500px] sm:w-[500px]" />
                <div className="absolute left-[58%] top-[48%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d71920]/[0.07]" />
                <div className="absolute left-1/2 top-[52%] h-[330px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d71920]/10 blur-[120px]" />
                <div className="absolute bottom-[65px] left-1/2 h-[72px] w-[78%] -translate-x-1/2 rounded-[50%] border border-[#ff2632]/35 shadow-[0_0_35px_rgba(215,25,32,0.08)]" />
                <div className="absolute bottom-[100px] left-1/2 h-px w-[68%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff2632]/50 to-transparent" />
            </div>

            <button
                type="button"
                onClick={anterior}
                aria-label={`Ver ${previo.label}`}
                className="group absolute left-[-10%] top-[49%] z-[2] hidden h-[210px] w-[290px] -translate-y-1/2 cursor-pointer opacity-[0.14] transition duration-500 hover:opacity-[0.26] lg:block xl:left-[-12%]"
            >
                <img
                    src={previo.src}
                    alt={previo.alt}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                    style={{ filter: "brightness(0) invert(1)" }}
                    draggable={false}
                />
            </button>

            <button
                type="button"
                onClick={siguiente}
                aria-label={`Ver ${siguienteVista.label}`}
                className="group absolute right-[-11%] top-[49%] z-[2] hidden h-[210px] w-[290px] -translate-y-1/2 cursor-pointer opacity-[0.14] transition duration-500 hover:opacity-[0.26] lg:block xl:right-[-13%]"
            >
                <img
                    src={siguienteVista.src}
                    alt={siguienteVista.alt}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                    style={{ filter: "brightness(0) invert(1)" }}
                    draggable={false}
                />
            </button>

            <div className="absolute inset-x-[3%] top-[45%] z-10 -translate-y-1/2 sm:inset-x-[6%] xl:inset-x-[1%]">
                <img
                    key={actual.src}
                    src={actual.src}
                    alt={actual.alt}
                    className="hero-car-fade mx-auto h-[300px] w-full max-w-[760px] object-contain drop-shadow-[0_0_28px_rgba(255,255,255,0.10)] sm:h-[370px] xl:h-[430px]"
                    style={{ filter: "brightness(0) invert(1)" }}
                    draggable={false}
                />
            </div>

            <div className="absolute left-[3%] top-[45%] z-20 hidden rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md xl:block">
                <p className="text-sm font-semibold text-white">Detailing exterior</p>
                <p className="mt-1 text-sm text-zinc-400">Haz que luzca como nuevo</p>
            </div>
            <div className="absolute left-[27%] top-[49%] z-20 hidden h-3.5 w-3.5 rounded-full border border-[#ff8087] bg-[#ff2632] shadow-[0_0_24px_rgba(215,25,32,0.95)] xl:block" />

            <div className="absolute right-[6%] top-[17%] z-20 hidden rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md xl:block">
                <p className="text-sm font-semibold text-white">
                    Recubrimiento cerámico
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                    Protege y da brillo duradero
                </p>
            </div>
            <div className="absolute right-[37%] top-[25%] z-20 hidden h-3.5 w-3.5 rounded-full border border-[#ff8087] bg-[#ff2632] shadow-[0_0_24px_rgba(215,25,32,0.95)] xl:block" />

            <div className="absolute right-[7%] top-[62%] z-20 hidden rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md xl:block">
                <p className="text-sm font-semibold text-white">Lavado interior</p>
                <p className="mt-1 text-sm text-zinc-400">
                    Un interior más limpio y saludable
                </p>
            </div>
            <div className="absolute right-[35%] top-[63%] z-20 hidden h-3.5 w-3.5 rounded-full border border-[#ff8087] bg-[#ff2632] shadow-[0_0_24px_rgba(215,25,32,0.95)] xl:block" />

            <div className="absolute bottom-[8px] left-1/2 z-30 flex w-[86%] max-w-[610px] -translate-x-1/2 items-center justify-center gap-4 sm:gap-6">
                <button
                    type="button"
                    onClick={anterior}
                    aria-label="Vista anterior"
                    className="group flex min-w-0 flex-1 items-center"
                >
                    <ArrowLeft
                        size={24}
                        strokeWidth={1.7}
                        className="shrink-0 text-[#ff2632] transition group-hover:-translate-x-1"
                    />
                    <span className="h-px min-w-0 flex-1 bg-gradient-to-r from-[#ff2632] via-[#ff2632]/70 to-transparent" />
                </button>

                <div className="shrink-0 text-center">
                    <p className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.38em] text-zinc-400">
                        Vista rotativa
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.20em] text-zinc-600">
                        {actual.label}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={siguiente}
                    aria-label="Vista siguiente"
                    className="group flex min-w-0 flex-1 items-center"
                >
                    <span className="h-px min-w-0 flex-1 bg-gradient-to-r from-transparent via-[#ff2632]/70 to-[#ff2632]" />
                    <ArrowRight
                        size={24}
                        strokeWidth={1.7}
                        className="shrink-0 text-[#ff2632] transition group-hover:translate-x-1"
                    />
                </button>
            </div>

            <div className="absolute bottom-[-20px] left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
                {vistas.map((vista, i) => (
                    <button
                        key={vista.src}
                        type="button"
                        aria-label={`Ver ${vista.label}`}
                        onClick={() => setIndice(i)}
                        className={`rounded-full transition-all duration-300 ${i === indice
                                ? "h-2 w-6 bg-[#ff2632] shadow-[0_0_14px_rgba(215,25,32,0.65)]"
                                : "h-2 w-2 bg-zinc-700 hover:bg-zinc-500"
                            }`}
                    />
                ))}
            </div>

            <style jsx>{`
                .hero-car-fade {
                    animation: heroCarFade 480ms cubic-bezier(0.22, 1, 0.36, 1) both;
                }

                @keyframes heroCarFade {
                    from {
                        opacity: 0;
                        transform: translateX(26px) scale(0.985);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }
            `}</style>
        </div>
    );
}

function ProgressSteps({ paso }: { paso: number }) {
    return (
        <div className="mt-5">
            <div className="flex items-center">
                {pasoInfo.map((item, index) => {
                    const activo = paso === item.numero;
                    const completado = paso > item.numero;

                    return (
                        <div
                            key={item.numero}
                            className={`flex items-center ${index < pasoInfo.length - 1 ? "flex-1" : ""
                                }`}
                        >
                            <div className="flex flex-col items-center">
                                <div
                                    className={`flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-bold transition ${activo
                                            ? "border-[#ff7d84] bg-[#ff2632] text-white shadow-[0_0_16px_rgba(215,25,32,0.55)]"
                                            : completado
                                                ? "border-[#ff2632] bg-[#d71920]/15 text-[#ff2632]"
                                                : "border-white/10 bg-white/[0.03] text-zinc-600"
                                        }`}
                                >
                                    {completado ? <Check size={12} /> : item.numero}
                                </div>
                                <span
                                    className={`mt-1.5 hidden text-[9px] font-semibold uppercase tracking-[0.12em] sm:block ${activo ? "text-zinc-300" : "text-zinc-600"
                                        }`}
                                >
                                    {item.titulo}
                                </span>
                            </div>

                            {index < pasoInfo.length - 1 && (
                                <div
                                    className={`mx-2 h-px flex-1 transition ${paso > item.numero
                                            ? "bg-[#ff2632]/60"
                                            : "bg-white/10"
                                        }`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            <p className="mt-3 text-right text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Paso {paso} de 3
            </p>
        </div>
    );
}

export default function Cotizador() {
    const [paso, setPaso] = useState(1);
    const [vehiculo, setVehiculo] = useState("Hatchback");
    const [serviciosSeleccionados, setServiciosSeleccionados] = useState<string[]>(
        []
    );
    const [detalle, setDetalle] = useState("");

    const vistas = useMemo(() => vistasPorVehiculo[vehiculo] ?? [], [vehiculo]);

    const toggleServicio = (servicio: string) => {
        setServiciosSeleccionados((prev) =>
            prev.includes(servicio)
                ? prev.filter((item) => item !== servicio)
                : [...prev, servicio]
        );
    };

    const avanzar = () => {
        if (paso === 1 && !vehiculo) {
            alert("Selecciona un tipo de vehículo.");
            return;
        }

        if (paso === 2 && serviciosSeleccionados.length === 0) {
            alert("Selecciona al menos un servicio.");
            return;
        }

        setPaso((prev) => Math.min(prev + 1, 3));
    };

    const volver = () => {
        setPaso((prev) => Math.max(prev - 1, 1));
    };

    const enviarWhatsApp = () => {
        if (!vehiculo || serviciosSeleccionados.length === 0) {
            alert("Completa los pasos anteriores antes de enviar.");
            return;
        }

        const serviciosTexto = serviciosSeleccionados
            .map((item) => `• ${item}`)
            .join("\n");

        const mensaje = `Hola Max Gloss 👋

Quisiera solicitar una cotización.

🚗 Vehículo:
${vehiculo}

✨ Servicios seleccionados:
${serviciosTexto}

${detalle.trim() ? `📝 Comentario:
${detalle.trim()}

` : ""}¿Me pueden indicar valor y disponibilidad?`;

        // Reemplaza por el número real de Max Gloss:
        // Formato: código de país + número, SIN +, espacios ni guiones.
        // Ejemplo Chile: 56912345678
        const telefono = "";

        const url = telefono
            ? `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`
            : `https://wa.me/?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <section
            id="cotizar"
            className="relative overflow-hidden border-t border-white/10 bg-[#070708] py-14 text-white"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_72%,rgba(215,25,32,0.13),transparent_26%),radial-gradient(circle_at_60%_25%,rgba(215,25,32,0.07),transparent_22%)]" />
            <div className="pointer-events-none absolute left-[36%] top-[12%] hidden h-[620px] w-[620px] rounded-full border border-[#d71920]/[0.07] xl:block" />

            <div className="relative mx-auto max-w-[1680px] px-5 lg:px-8">
                <div className="grid gap-8 xl:grid-cols-[1.16fr_0.84fr] xl:items-start">
                    {/* IZQUIERDA */}
                    <div className="min-w-0 xl:pr-3">
                        <div className="mb-5 flex items-center gap-4">
                            <span className="h-[2px] w-12 bg-[#ff2632]" />
                            <p className="text-xs font-bold uppercase tracking-[0.36em] text-[#ff2632]">
                                Cotiza tu vehículo
                            </p>
                        </div>

                        <h2 className="max-w-[680px] text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-[64px] xl:text-[72px]">
                            ¿Qué necesita
                            <br />
                            <span className="text-zinc-500">tu auto?</span>
                        </h2>

                        <p className="mt-5 max-w-[620px] text-base leading-7 text-zinc-400 lg:text-[17px]">
                            Selecciona tu vehículo, elige los servicios y envía
                            todos los detalles directamente por WhatsApp.
                        </p>

                        <VehicleHeroCarousel vehiculo={vehiculo} vistas={vistas} />

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                                <div className="flex items-start gap-3">
                                    <ShieldCheck
                                        size={22}
                                        className="mt-0.5 shrink-0 text-[#ff2632]"
                                    />
                                    <div>
                                        <p className="text-sm text-zinc-300 lg:text-[15px]">
                                            Resultados
                                        </p>
                                        <p className="text-sm text-zinc-300 lg:text-[15px]">
                                            profesionales
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                                <div className="flex items-start gap-3">
                                    <Clock3
                                        size={22}
                                        className="mt-0.5 shrink-0 text-[#ff2632]"
                                    />
                                    <div>
                                        <p className="text-sm text-zinc-300 lg:text-[15px]">
                                            Atención
                                        </p>
                                        <p className="text-sm text-zinc-300 lg:text-[15px]">
                                            por WhatsApp
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                                <div className="flex items-start gap-3">
                                    <Sparkles
                                        size={22}
                                        className="mt-0.5 shrink-0 text-[#ff2632]"
                                    />
                                    <div>
                                        <p className="text-sm text-zinc-300 lg:text-[15px]">
                                            Tu auto en
                                        </p>
                                        <p className="text-sm text-zinc-300 lg:text-[15px]">
                                            manos expertas
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between gap-5 text-[11px] uppercase tracking-[0.32em] text-zinc-600">
                            <div className="flex items-center gap-4">
                                <span className="inline-block h-px w-12 bg-white/10" />
                                <span>Más que un lavado, es cuidado real</span>
                            </div>

                            <div className="hidden items-center gap-4 xl:flex">
                                <span className="text-[#ff2632]">///</span>
                                <span>Detallamos tu pasión</span>
                            </div>
                        </div>
                    </div>

                    {/* DERECHA */}
                    <div className="xl:pl-2 xl:pt-[205px]">
                        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,14,18,0.96),rgba(9,9,12,0.98))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-5 lg:p-6">
                            {/* HEADER */}
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d71920]/12">
                                        <Car size={20} className="text-[#ff2632]" />
                                    </div>

                                    <div>
                                        <h3 className="text-[16px] font-bold text-white sm:text-[18px]">
                                            Cotización rápida
                                        </h3>
                                        <p className="mt-0.5 text-[13px] text-zinc-500">
                                            Completa los 3 pasos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <ProgressSteps paso={paso} />

                            {/* CONTENIDO POR PASOS */}
                            <div className="step-fade mt-5 border-t border-white/[0.08] pt-5">
                                {paso === 1 && (
                                    <div>
                                        <div className="mb-4">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff2632]">
                                                Paso 1
                                            </p>
                                            <h4 className="mt-1 text-lg font-bold text-white">
                                                ¿Qué vehículo tienes?
                                            </h4>
                                            <p className="mt-1 text-sm leading-6 text-zinc-500">
                                                Selecciona el tipo de vehículo para adaptar la
                                                cotización.
                                            </p>
                                        </div>

                                        <label
                                            htmlFor="vehiculo"
                                            className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500"
                                        >
                                            Tipo de vehículo
                                        </label>

                                        <select
                                            id="vehiculo"
                                            value={vehiculo}
                                            onChange={(e) => setVehiculo(e.target.value)}
                                            className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/70 px-4 text-[14px] text-white outline-none transition focus:border-[#d71920]"
                                        >
                                            {vehiculos.map((item) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </select>

                                        <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d71920]/10">
                                                    <Car
                                                        size={17}
                                                        className="text-[#ff2632]"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white">
                                                        {vehiculo}
                                                    </p>
                                                    <p className="text-xs text-zinc-500">
                                                        La vista de la izquierda cambia según tu
                                                        selección.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={avanzar}
                                            className="group mt-5 flex h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(180deg,#ff2935,#da111c)] px-5 text-[14px] font-bold text-white shadow-[0_10px_24px_rgba(215,25,32,0.24)] transition hover:brightness-110"
                                        >
                                            Continuar
                                            <ArrowRight
                                                size={16}
                                                className="transition group-hover:translate-x-1"
                                            />
                                        </button>
                                    </div>
                                )}

                                {paso === 2 && (
                                    <div>
                                        <div className="mb-4 flex items-end justify-between gap-4">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff2632]">
                                                    Paso 2
                                                </p>
                                                <h4 className="mt-1 text-lg font-bold text-white">
                                                    ¿Qué servicios necesitas?
                                                </h4>
                                                <p className="mt-1 text-sm leading-6 text-zinc-500">
                                                    Puedes seleccionar más de uno.
                                                </p>
                                            </div>

                                            {serviciosSeleccionados.length > 0 && (
                                                <span className="shrink-0 rounded-full border border-[#ff2632]/30 bg-[#d71920]/10 px-2.5 py-1 text-[10px] font-semibold text-[#ff626b]">
                                                    {serviciosSeleccionados.length} seleccionados
                                                </span>
                                            )}
                                        </div>

                                        <div className="grid gap-x-5 gap-y-5 lg:grid-cols-2">
                                            {categoriasServicios.map((grupo) => (
                                                <div key={grupo.categoria}>
                                                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-600">
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
                                                                    onClick={() =>
                                                                        toggleServicio(item)
                                                                    }
                                                                    className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-full border px-3 py-2 text-[12px] transition ${seleccionado
                                                                            ? "border-[#ff2632] bg-[#d71920]/12 text-white shadow-[0_0_18px_rgba(215,25,32,0.10)]"
                                                                            : "border-white/10 bg-black/45 text-zinc-400 hover:border-white/20 hover:text-white"
                                                                        }`}
                                                                >
                                                                    {seleccionado && (
                                                                        <Check
                                                                            size={12}
                                                                            className="text-[#ff2632]"
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

                                        <div className="mt-5 grid grid-cols-[0.42fr_0.58fr] gap-3">
                                            <button
                                                type="button"
                                                onClick={volver}
                                                className="flex h-[46px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] text-[13px] font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white"
                                            >
                                                <ArrowLeft size={15} />
                                                Atrás
                                            </button>

                                            <button
                                                type="button"
                                                onClick={avanzar}
                                                className="group flex h-[46px] items-center justify-center gap-2 rounded-xl bg-[linear-gradient(180deg,#ff2935,#da111c)] text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(215,25,32,0.24)] transition hover:brightness-110"
                                            >
                                                Continuar
                                                <ArrowRight
                                                    size={15}
                                                    className="transition group-hover:translate-x-1"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {paso === 3 && (
                                    <div>
                                        <div className="mb-4">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff2632]">
                                                Paso 3
                                            </p>
                                            <h4 className="mt-1 text-lg font-bold text-white">
                                                Revisa y envía
                                            </h4>
                                            <p className="mt-1 text-sm leading-6 text-zinc-500">
                                                Estos datos se enviarán directamente por WhatsApp.
                                            </p>
                                        </div>

                                        {/* RESUMEN */}
                                        <div className="rounded-2xl border border-white/[0.08] bg-black/30 p-4">
                                            <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-3">
                                                <div>
                                                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-zinc-600">
                                                        Vehículo
                                                    </p>
                                                    <p className="mt-1 text-sm font-semibold text-white">
                                                        {vehiculo}
                                                    </p>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => setPaso(1)}
                                                    className="text-[11px] font-semibold text-[#ff4b55] transition hover:text-[#ff7a82]"
                                                >
                                                    Cambiar
                                                </button>
                                            </div>

                                            <div className="pt-3">
                                                <div className="flex items-center justify-between gap-3">
                                                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-zinc-600">
                                                        Servicios
                                                    </p>

                                                    <button
                                                        type="button"
                                                        onClick={() => setPaso(2)}
                                                        className="text-[11px] font-semibold text-[#ff4b55] transition hover:text-[#ff7a82]"
                                                    >
                                                        Editar
                                                    </button>
                                                </div>

                                                <div className="mt-2 flex flex-wrap gap-1.5">
                                                    {serviciosSeleccionados.map((item) => (
                                                        <span
                                                            key={item}
                                                            className="rounded-full border border-[#ff2632]/25 bg-[#d71920]/8 px-2.5 py-1 text-[11px] text-zinc-300"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <label
                                                htmlFor="detalle"
                                                className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500"
                                            >
                                                Comentario opcional
                                            </label>

                                            <textarea
                                                id="detalle"
                                                value={detalle}
                                                onChange={(e) => setDetalle(e.target.value)}
                                                placeholder="Ej: Tiene algunas marcas en la pintura..."
                                                rows={3}
                                                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-[#d71920]"
                                            />
                                        </div>

                                        <div className="mt-5 grid grid-cols-[0.34fr_0.66fr] gap-3">
                                            <button
                                                type="button"
                                                onClick={volver}
                                                className="flex h-[50px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] text-[13px] font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white"
                                            >
                                                <ArrowLeft size={15} />
                                                Atrás
                                            </button>

                                            <button
                                                type="button"
                                                onClick={enviarWhatsApp}
                                                className="group flex h-[50px] items-center justify-center gap-2 rounded-xl bg-[linear-gradient(180deg,#ff2935,#da111c)] px-4 text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(215,25,32,0.28)] transition hover:brightness-110"
                                            >
                                                <MessageCircle size={17} />
                                                <span>Enviar por WhatsApp</span>
                                                <ArrowRight
                                                    size={15}
                                                    className="transition group-hover:translate-x-1"
                                                />
                                            </button>
                                        </div>

                                        <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-zinc-600">
                                            <Lock size={13} />
                                            <span>
                                                Sin compromiso. Revisamos tu solicitud por WhatsApp.
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <style jsx>{`
                                .step-fade {
                                    animation: stepFade 260ms ease both;
                                }

                                @keyframes stepFade {
                                    from {
                                        opacity: 0;
                                        transform: translateY(5px);
                                    }
                                    to {
                                        opacity: 1;
                                        transform: translateY(0);
                                    }
                                }
                            `}</style>
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-4 text-[13px] uppercase tracking-[0.34em] text-zinc-600 xl:hidden">
                            <span className="text-[#ff2632]">///</span>
                            <span>Detallamos tu pasión</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
