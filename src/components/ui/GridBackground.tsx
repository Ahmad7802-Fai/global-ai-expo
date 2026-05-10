type Props = {
  className?: string;
};

export default function GridBackground({
  className = "",
}: Props) {
  return (
    <div
      className={`
        absolute
        inset-0

        opacity-[0.04]

        bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]

        bg-[size:48px_48px]

        ${className}
      `}
    />
  );
}