import { Suspense } from "react";
import ShopClient from "../shop/shopClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<main className="container py-16">Loading shop…</main>}>
      <ShopClient />
    </Suspense>
  );
}
