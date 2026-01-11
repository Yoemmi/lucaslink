import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function LoginRedirect({
  searchParams,
}: {
  searchParams: { next?: string };
}) {
  const next = searchParams?.next
    ? `?next=${encodeURIComponent(searchParams.next)}`
    : "";

  // Auto redirect al UI bonito
  redirect(`${next}`);
}
