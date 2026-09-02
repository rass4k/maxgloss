import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
    return (
        <a
            href="https://wa.me/56942002181?text=Hola%20MaxGloss%2C%20quisiera%20realizar%20una%20consulta."
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar a MaxGloss por WhatsApp"
            className="
        fixed
        bottom-24
        right-5
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#d71920]
        text-white
        shadow-[0_10px_35px_rgba(215,25,32,0.35)]
        transition
        duration-300
        hover:scale-105
        hover:bg-[#ee252d]
        md:bottom-5
      "
        >
            <MessageCircle
                size={25}
                strokeWidth={2}
            />
        </a>
    );
}