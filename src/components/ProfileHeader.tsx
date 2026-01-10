import Image from "next/image";
import type { CreatorProfile } from "@/types";

export default function ProfileHeader({ profile }: { profile: CreatorProfile }) {
  return (
    <header className="relative">
      <div className="h-36 w-full overflow-hidden rounded-b-[28px] bg-black/10">
        {profile.coverUrl ? (
          <Image
            src={profile.coverUrl}
            alt="cover"
            fill
            className="object-cover"
            priority
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/25" />
      </div>

      <div className="px-4 -mt-10">
        <div className="flex items-end gap-3">
          <div className="h-20 w-20 rounded-2xl overflow-hidden ring-4 ring-white shadow">
            <Image
              src={profile.avatarUrl}
              alt="avatar"
              width={160}
              height={160}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="pb-2">
            <p className="text-xl font-extrabold text-gray-900 leading-tight">{profile.name}</p>
            <p className="text-sm font-semibold text-gray-500">{profile.handle}</p>
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-700 leading-relaxed">{profile.bio}</p>
      </div>
    </header>
  );
}
