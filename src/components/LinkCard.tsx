import { ChevronRight } from "lucide-react";
import type { LinkItem } from "@/types";
import { BRAND_COLOR, iconFor } from "@/constants";

export default function LinkCard({ link }: { link: LinkItem }) {
  const Icon = iconFor(link.icon);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-3 shadow-sm hover:shadow-md transition"
    >
      <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center">
        <Icon className="h-5 w-5" style={{ color: BRAND_COLOR }} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-gray-900 truncate">{link.title}</p>
        {link.subtitle ? (
          <p className="text-xs text-gray-500 truncate">{link.subtitle}</p>
        ) : null}
      </div>

      <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-gray-400" />
    </a>
  );
}
