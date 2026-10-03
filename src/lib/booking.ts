// Central booking config (A1). Single source of truth for scheduling.
// SESSION_MINUTES = what the visitor experiences (displayed in Contact footer).
// SLOT_MINUTES = session + buffer/setup (used for scheduling math later).
// BOOKING_URL = Google Calendar Appointment Schedule link. Empty until Libni
// delivers it — the CTA falls back to "#" so the layout is previewable.

export const SESSION_MINUTES = 60;
export const SLOT_MINUTES = 75;
export const BOOKING_TZ = "America/Guatemala";
export const MEET_AUTO = false;

export const BOOKING_URL = "https://calendar.app.google/jrgDS5RanxJHUqZP8";
