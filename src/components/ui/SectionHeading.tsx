import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl sm:text-4xl font-serif text-charcoal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-charcoal-light max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
