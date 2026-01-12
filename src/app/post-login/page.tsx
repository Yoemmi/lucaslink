import { Suspense } from "react";
import PostLoginClient from "./PostLoginClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PostLoginClient />
    </Suspense>
  );
}
