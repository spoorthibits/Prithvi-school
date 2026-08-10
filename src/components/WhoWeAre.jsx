"use client";

import { useEffect, useRef, useState } from "react";

// Exact values from the original design
const CARDS = [
  {
    key: "history",
    title: "Our History",
    text: "Built from one classroom into a full campus, without losing the original idea.",
    color: "#075a36",
    offset: -255,
    rotate: -8,
    delay: 50,
    icon: (
      <>
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
  {
    key: "team",
    title: "Our Team",
    text: "Teachers trained specifically in concept-based, hands-on teaching.",
    color: "#438e42",
    offset: -85,
    rotate: -3,
    delay: 150,
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </>
    ),
  },
  {
    key: "values",
    title: "Our Values",
    text: "Curiosity and character, given equal weight in every classroom.",
    color: "#f7941d",
    offset: 85,
    rotate: 3,
    delay: 250,
    icon: <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" />,
  },
  {
    key: "community",
    title: "Our Community",
    text: "Parents as partners, not just spectators of their child's growth.",
    color: "#2d6b8f",
    offset: 255,
    rotate: 8,
    delay: 350,
    icon: <path d="M4 19V5a2 2 0 012-2h12a2 2 0 012 2v14M4 19l2-2h12l2 2M4 19h16" />,
  },
];

export default function WhoWeAreRolodex() {
  const deckRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: "#fffbe8", textAlign: "center" }} className="py-15 md:py-10">
      <div className="container-custom">
        <div style={{ maxWidth: 560, margin: "0 auto 70px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#f7941d",
              marginBottom: 16,
            }}
          >
            Who We Are
          </span>
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(26px, 3.2vw, 36px)", color: "#075a36", marginBottom: 10 }}
          >
            Four facts, four cards
          </h2>
          <p style={{ color: "#5a5a4d", fontSize: "15.5px" }}>
            Everything you&rsquo;d want to know about us, dealt out at once.
          </p>
        </div>

        <div ref={deckRef} className="w4-deck">
          {CARDS.map((card) => (
            <div
              key={card.key}
              className="w4-card"
              style={{
                borderTopColor: card.color,
                opacity: inView ? 1 : 0,
                transitionDelay: inView ? `${card.delay}ms` : "0ms",
                "--tx": `${card.offset}px`,
                "--rot": `${card.rotate}deg`,
              }}
              data-inview={inView}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#075a36"
                strokeWidth={1.5}
                style={{ width: 22, height: 22, marginBottom: 12 }}
              >
                {card.icon}
              </svg>
              <h4 style={{ fontSize: 15, color: "#333333", marginBottom: 6 }}>{card.title}</h4>
              <p style={{ fontSize: "12.5px", color: "#777777" }}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .w4-deck {
          position: relative;
          height: 220px;
          max-width: 760px;
          margin: 0 auto;
        }
        .w4-card {
          position: absolute;
          top: 0;
          left: 50%;
          width: 200px;
          min-height: 210px;
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.1);
          padding: 24px 20px;
          text-align: left;
          border-top: 5px solid;
          transform: translate(-50%, 0) rotate(0deg) scale(0.9);
          transition:
            transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1),
            opacity 0.5s ease;
        }
        .w4-card[data-inview="true"] {
          transform: translate(calc(-50% + var(--tx)), 0) rotate(var(--rot)) scale(1);
        }

        /* Tablet: 2x2 grid */
        @media (max-width: 860px) and (min-width: 641px) {
          .w4-deck {
            height: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            max-width: 520px;
          }
          .w4-card {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            margin: 0;
            transform: rotate(0deg) scale(0.9);
          }
          .w4-card[data-inview="true"] {
            transform: rotate(0deg) scale(1);
          }
        }

        /* Mobile: single stacked column */
        @media (max-width: 640px) {
          .w4-deck {
            height: auto;
          }
          .w4-card {
            position: relative;
            left: auto;
            margin: 0 auto 14px;
            transform: translate(0, 0) rotate(0deg) scale(0.9);
          }
          .w4-card[data-inview="true"] {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }
      `}</style>
    </section>
  );
}