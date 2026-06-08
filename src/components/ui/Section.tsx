import { SectionId } from "@/types";

interface SectionProps {
  id: SectionId;
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export function Section({
  id,
  children,
  fullWidth = false,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          {children}
        </div>
      )}
    </section>
  );
}
