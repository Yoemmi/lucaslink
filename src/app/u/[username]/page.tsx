import { notFound } from "next/navigation";
import { getProfile } from "@/lib/demoProfiles";
import ProfileClient from "./ProfileClient";

type PageProps = {
  params: Promise<{ username: string }>;
};

export default async function UserProfilePage({ params }: PageProps) {
  const { username } = await params; // ✅ Next 16: params puede ser Promise
  const profile = getProfile(username);

  if (!profile) notFound();

  return <ProfileClient profile={profile} />;
}