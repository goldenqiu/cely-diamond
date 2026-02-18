import { ANNOUNCEMENT_TEXT } from "@/lib/constants";

export default function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-cream text-xs sm:text-sm text-center py-2 px-4">
      {ANNOUNCEMENT_TEXT}
    </div>
  );
}
