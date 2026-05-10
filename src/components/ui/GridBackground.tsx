type Props = {
  className?: string;
  dark?: boolean;
};

export default function GridBackground({
  className = "",
  dark = false,
}: Props) {
  return (
    <div
      className={`
        absolute
        inset-0

        ${
          dark
            ? "opacity-[0.03]"
            : "opacity-[0.04]"
        }

        ${
          dark
            ? `
            bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]
          `
            : `
            bg-[linear-gradient(rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.06)_1px,transparent_1px)]
          `
        }

        bg-[size:52px_52px]

        ${className}
      `}
    />
  );
}