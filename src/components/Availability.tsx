import { useTranslations } from "next-intl";
import CalendarIcon from "./icons/CalendarIcon";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import { BOOKING_URL } from "../lib/booking";

type AvailabilityProps = {
  showCta?: boolean;
  showNote?: boolean;
  className?: string;
};

// Shared availability block. Hours strings live once in the `sessions`
// namespace; Contact and Sessions render this component (duplicate display,
// single source). CTA links out to the Google booking page (no iframe).
export default function Availability({
  showCta = false,
  showNote = false,
  className = "",
}: AvailabilityProps) {
  const t = useTranslations("sessions");
  const tAvail = useTranslations("availability");
  const isLive = BOOKING_URL.length > 0;
  const href = isLive ? BOOKING_URL : "#";

  return (
    <div className={`flex-1 flex flex-col gap-2 lg:gap-4 ${className}`}>
      <h3 className="text-2xl lg:text-4xl font-patrick">{t("hours")}</h3>
      <ul className="flex flex-col gap-1 lg:gap-2 mt-2 lg:mt-4">
        <li className="text-md lg:text-2xl text-theme-foreground">
          <CalendarIcon
            color="currentColor"
            aria-hidden="true"
            className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
          />
          {t("weekdays")}
        </li>
        <li className="text-md lg:text-2xl text-theme-foreground">
          <CalendarIcon
            color="currentColor"
            aria-hidden="true"
            className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
          />
          {t("saturday")}
        </li>
      </ul>
      {showNote && (
        <p className="text-md lg:text-2xl mt-2 lg:mt-4">{t("note")}</p>
      )}
      {showCta && (
        <a
          href={href}
          {...(isLive
            ? { target: "_blank", rel: "noopener noreferrer" }
            : { "aria-disabled": true })}
          aria-label={tAvail("ctaLabel")}
          className={`inline-flex items-center gap-2 rounded-full border-2 border-theme-foreground bg-transparent text-theme-foreground px-6 py-3 text-md lg:text-2xl mt-2 lg:mt-4 w-fit transition-colors hover:bg-theme-foreground hover:text-theme-surface ${
            isLive ? "" : "opacity-80"
          }`}
        >
          {tAvail("cta")}
          <ExternalLinkIcon
            color="currentColor"
            className="inline-block w-5 lg:w-6 h-5 lg:h-6"
          />
        </a>
      )}
    </div>
  );
}
