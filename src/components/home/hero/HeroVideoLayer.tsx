export default function HeroVideoLayer() {
  return (
    <>
      {/* video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          absolute
          inset-0

          h-full
          w-full

          object-cover
        "
      >

        <source
          src="https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />

      </video>

      {/* dark overlay */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(180deg,rgba(4,10,7,.72)_0%,rgba(4,10,7,.56)_40%,rgba(4,10,7,.94)_100%)]
        "
      />

      {/* subtle glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(47,209,123,.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(14,165,164,.08),transparent_24%)]
        "
      />

      {/* left glow */}
      <div
        className="
          absolute
          left-[-120px]
          top-[120px]

          h-[280px]
          w-[280px]

          rounded-full

          bg-emerald-400/10

          blur-[80px]

          md:h-[420px]
          md:w-[420px]

          md:blur-[120px]
        "
      />

      {/* right glow */}
      <div
        className="
          absolute
          right-[-120px]
          top-[120px]

          h-[260px]
          w-[260px]

          rounded-full

          bg-teal-400/10

          blur-[80px]

          md:h-[380px]
          md:w-[380px]

          md:blur-[120px]
        "
      />

      {/* grid */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]

          bg-[size:48px_48px]
        "
      />
    </>
  );
}