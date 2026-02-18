import { DiamondSpecs } from "@/types/product";

export default function ProductSpecs({
  specs,
  metalType,
}: {
  specs: DiamondSpecs;
  metalType: string;
}) {
  const rows = [
    { label: "Shape", value: specs.shape },
    { label: "Carat Weight", value: `${specs.carat} ct` },
    { label: "Cut", value: specs.cut },
    { label: "Color", value: specs.color },
    { label: "Clarity", value: specs.clarity },
    { label: "Metal", value: metalType },
  ];

  return (
    <div>
      <h3 className="font-serif text-lg mb-4">Diamond Specifications</h3>
      <div className="border border-cream-dark rounded-lg overflow-hidden">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={cn(
              "flex items-center justify-between px-4 py-3 text-sm",
              i % 2 === 0 ? "bg-cream" : "bg-cream-dark/50"
            )}
          >
            <span className="text-charcoal-light">{row.label}</span>
            <span className="font-medium">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
