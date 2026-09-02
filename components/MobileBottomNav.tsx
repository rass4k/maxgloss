"use client";

import { useEffect, useState } from "react";
import {
    Home,
    Sparkles,
    Images,
    MessageCircle,
} from "lucide-react";

const items = [
    {
        label: "Inicio",
        href: "#inicio",
        id: "inicio",
        icon: Home,
        sections: ["inicio"],
    },
    {
        label: "Servicios",
        href: "#servicios",
        id: "servicios",
        icon: Sparkles,
        sections: [
            "servicios",
            "resultados",
            "proceso",
            "ceramico",
        ],
    },
    {
        label: "Trabajos",
        href: "#trabajos",
        id: "trabajos",
        icon: Images,
        sections: ["trabajos"],
    },
    {
        label: "Cotizar",
        href: "#cotizar",
        id: "cotizar",
        icon: MessageCircle,
        sections: ["cotizar", "contacto"],
    },
];

export default function MobileBottomNav() {
    const [activeSection, setActiveSection] =
        useState("inicio");

    useEffect(() => {
        const sectionIds = items.flatMap(
            (item) => item.sections
        );

        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        const detectarSeccion = () => {
            /*
             * Tomamos como referencia aprox. el 38% de la
             * altura de la pantalla.
             */
            const puntoReferencia =
                window.scrollY + window.innerHeight * 0.38;

            let actual = "inicio";

            sections.forEach((section) => {
                if (section.offsetTop <= puntoReferencia) {
                    actual = section.id;
                }
            });

            /*
             * Buscamos a qué botón pertenece esa sección.
             */
            const itemActivo = items.find((item) =>
                item.sections.includes(actual)
            );

            if (itemActivo) {
                setActiveSection(itemActivo.id);
            }
        };

        detectarSeccion();

        window.addEventListener(
            "scroll",
            detectarSeccion,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            detectarSeccion
        );

        return () => {
            window.removeEventListener(
                "scroll",
                detectarSeccion
            );

            window.removeEventListener(
                "resize",
                detectarSeccion
            );
        };
    }, []);

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-[#080808]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
            <div className="mx-auto grid h-[68px] max-w-md grid-cols-4 items-center px-2">
                {items.map(
                    ({
                        label,
                        href,
                        id,
                        icon: Icon,
                    }) => {
                        const activo =
                            activeSection === id;

                        return (
                            <a
                                key={id}
                                href={href}
                                onClick={() =>
                                    setActiveSection(id)
                                }
                                className="group relative flex h-full flex-col items-center justify-center gap-1"
                            >
                                {/* INDICADOR SUPERIOR */}
                                <span
                                    className={`absolute top-0 h-[2px] rounded-full transition-all duration-300 ${activo
                                            ? "w-8 bg-[#d71920]"
                                            : "w-0 bg-transparent"
                                        }`}
                                />

                                {/* COTIZAR */}
                                {id === "cotizar" ? (
                                    <>
                                        <div
                                            className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${activo
                                                    ? "scale-105 bg-[#d71920] text-white shadow-[0_6px_25px_rgba(215,25,32,0.4)]"
                                                    : "bg-[#d71920]/15 text-[#d71920]"
                                                }`}
                                        >
                                            <MessageCircle
                                                size={19}
                                                strokeWidth={2}
                                            />
                                        </div>

                                        <span
                                            className={`text-[10px] font-semibold transition ${activo
                                                    ? "text-white"
                                                    : "text-zinc-500"
                                                }`}
                                        >
                                            Cotizar
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <Icon
                                            size={20}
                                            strokeWidth={1.8}
                                            className={`transition-all duration-300 ${activo
                                                    ? "scale-105 text-[#d71920]"
                                                    : "text-zinc-500"
                                                }`}
                                        />

                                        <span
                                            className={`text-[10px] font-medium transition-colors ${activo
                                                    ? "text-white"
                                                    : "text-zinc-500"
                                                }`}
                                        >
                                            {label}
                                        </span>
                                    </>
                                )}
                            </a>
                        );
                    }
                )}
            </div>
        </nav>
    );
}