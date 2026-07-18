import { WhatsAppIcon } from "@/components/icons";
import { SITE, whatsappLink } from "@/lib/site";

// Fixed chat button for general inquiries. Sits above the mobile bottom nav on
// small screens, bottom-right on larger ones. A soft pulsing ring draws the eye.
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(SITE.generalInquiry)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 motion-safe:animate-ping" />
      <WhatsAppIcon className="relative h-8 w-8 text-white" />
    </a>
  );
}
