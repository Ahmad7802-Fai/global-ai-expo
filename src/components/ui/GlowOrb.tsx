type Props = {
  className?: string;
};

export default function GlowOrb({
  className = "",
}: Props) {
  return (
    <div
      className={`
        absolute

        rounded-full

        bg-emerald-400/10

        blur-[140px]

        ${className}
      `}
    />
  );
}