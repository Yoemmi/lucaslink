"use client";

import React from "react";
import RequireAuth from "@/components/auth/RequireAuth";

export default function Ui3Layout({ children }: { children: React.ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>;
}
