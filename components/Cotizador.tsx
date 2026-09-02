"use client";

import { useState } from "react";
import {
    Car,
    MessageCircle,
    ArrowRight,
    Check,
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

const vehiculos = [
    "Hatchback",
    "Sedán",
    "SUV",
    "Camioneta",
    "Otro",
];

export default function Cotizador() {
    const [vehiculo, setVehiculo] = useState("");
    const [serviciosSeleccionados, setServiciosSeleccionados] =
        useState<string[]>([]);
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

        // Número real de Max Gloss:
        // Ejemplo: 56912345678
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
            {/* Luz ambiental */}
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#d71920]/5 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

                    {/* IZQUIERDA */}
                    <div>
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
                                Si no sabes cuál necesitas, selecciona “Necesito recomendación”.
                            </p>
                        </div>
                    </div>

                    {/* FORMULARIO */}
                    <div className="rounded-2xl border border-white/10 bg-[#111113] p-5 sm:p-7">

                        {/* HEADER */}
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d71920]/10">
                                <Car
                                    size={20}
                                    className="text-[#d71920]"
                                />
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
                                <option value="">
                                    Selecciona tu vehículo
                                </option>

                                {vehiculos.map((item) => (
                                    <option
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* SERVICIOS */}
                        <div className="mt-6">
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
                                                                ? "border-[#d71920] bg-[#d71920]/10 text-white"
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