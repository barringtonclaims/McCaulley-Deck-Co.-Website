// Google Ads tag + conversion tracking for McCaulley Deck Co.
// Tag + conversion action created in Google Ads account 302-900-1649.
export const GOOGLE_ADS_ID = "AW-18229667100";

// "Submit lead form" conversion action — fired on a successful contact-form submit.
export const LEAD_CONVERSION_SEND_TO = "AW-18229667100/FY_FCKy_zMIcEJzKyvRD";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Fire the Google Ads lead conversion. Safe no-op if the tag hasn't loaded.
export function reportLeadConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: LEAD_CONVERSION_SEND_TO });
}
