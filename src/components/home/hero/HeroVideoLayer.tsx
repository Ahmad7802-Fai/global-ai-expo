"use client";

export default function HeroVideoLayer() {
  return (
    <>
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute
          inset-0

          h-full
          w-full

          object-cover

          scale-[1.06]
        "
      >
        <source
          src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(180deg,rgba(4,10,7,.60)_0%,rgba(4,10,7,.45)_40%,rgba(4,10,7,.92)_100%)]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(47,209,123,.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(14,165,164,.10),transparent_26%)]
        "
      />

      {/* LIGHTS */}
      <div
        className="
          absolute
          left-[-120px]
          top-[120px]

          h-[420px]
          w-[420px]

          rounded-full

          bg-emerald-400/12

          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          top-[120px]

          h-[380px]
          w-[380px]

          rounded-full

          bg-teal-400/10

          blur-[120px]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.08]

          bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]

          bg-[size:52px_52px]
        "
      />
    </>
  );
}