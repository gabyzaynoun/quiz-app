import * as React from "react";

export function Card({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`bg-white rounded-2xl border shadow-sm ${className}`}>{children}</div>;
}
export function CardBody({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
