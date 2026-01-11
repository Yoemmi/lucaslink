import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

export default function RegisterRedirect({
  searchParams,
}: {
  searchParams: { next?: string };
}) {
  const next = searchParams?.next
    ? ?next=\
    : "";
  redirect($registerTarget\);
}
