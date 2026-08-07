"use client";

import React, { useEffect } from "react";

export default function AdmissionProcess() {
  useEffect(() => {
    (function () {
      var outer = document.getElementById("apcScrollOuter");
      var track = document.getElementById("apcTrack");
      var panels = Array.prototype.slice.call(document.querySelectorAll(".apc-panel"));
      var tabs = Array.prototype.slice.call(document.querySelectorAll(".apc-tab"));
      var fill = document.getElementById("apcProgressFill");

      var maxTranslate = 0; // horizontal distance the track needs to travel
      var scrollDistance = 0; // vertical distance the user must scroll to cover maxTranslate
      var outerTopAbs = 0; // outer section's top, in document coordinates
      var isMobile = false;

      // Progress is driven directly by how far the user has scrolled *into*
      // the pinned section — it moves both ways: scrolling down increases
      // it (track slides right), scrolling up decreases it (track slides
      // back left).
      var cumulative = 0;

      // Turn this up to require more vertical scrolling to move through all
      // 5 steps (i.e. make the horizontal scroll feel slower). 1 = 1:1 with
      // the horizontal distance, 2 = twice as much scrolling needed, etc.
      var SCROLL_SPEED = 1.6;

      function measure() {
        isMobile = window.matchMedia("(max-width:820px)").matches;
        if (isMobile) {
          outer.style.height = "auto";
          return;
        }
        var trackWidth = track.scrollWidth;
        var viewportWidth = window.innerWidth;
        maxTranslate = Math.max(trackWidth - viewportWidth + viewportWidth * 0.05, 0);
        scrollDistance = maxTranslate * SCROLL_SPEED;
        // total vertical scroll distance = one viewport (pin) + the scroll distance to travel
        outer.style.height = window.innerHeight + scrollDistance + "px";

        var rect = outer.getBoundingClientRect();
        outerTopAbs = window.scrollY + rect.top;
      }

      function setActive(index) {
        panels.forEach(function (p, i) {
          p.classList.toggle("is-active", i === index);
        });
        tabs.forEach(function (t, i) {
          t.classList.toggle("is-active", i === index);
        });
      }

      function render() {
        var progress = scrollDistance > 0 ? Math.min(Math.max(cumulative / scrollDistance, 0), 1) : 0;

        // Track sits at rest (translateX 0, panel 1 visible) at progress 0.
        // As progress increases, translateX becomes more negative — the
        // track slides LEFT, panels enter from the right and exit to the
        // left. This is bidirectional: scrolling back up reduces progress
        // and the track slides back RIGHT toward its resting position.
        track.style.transform = "translateX(" + -progress * maxTranslate + "px)";
        fill.style.width = progress * 100 + "%";

        var activeIndex = Math.round(progress * (panels.length - 1));
        setActive(activeIndex);
      }

      function onScroll() {
        if (isMobile) return;

        // How far the user has scrolled past the section's own top edge —
        // this is 0 (or negative, clamped to 0) until the section actually
        // reaches the top of the viewport and begins pinning.
        var scrolledIntoOuter = window.scrollY - outerTopAbs;
        var target = Math.min(Math.max(scrolledIntoOuter, 0), scrollDistance);

        cumulative = target;
        render();
      }

      tabs.forEach(function (t) {
        t.addEventListener("click", function () {
          var index = parseInt(t.dataset.index, 10);
          if (isMobile) {
            panels[index].scrollIntoView({ behavior: "smooth", block: "center" });
            return;
          }
          var targetProgress = index / (panels.length - 1);

          cumulative = targetProgress * scrollDistance;
          render();

          window.scrollTo({ top: outerTopAbs + targetProgress * scrollDistance, behavior: "smooth" });
        });
      });

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", function () {
        measure();
        render();
      });

      measure();
      render();
    })();
  }, []);

  return (
    <>
      <style>{`
        /* =========================================
           PRITHVI BRAND COLORS — from globals.css
        ========================================= */
        :root {
          --green: #438e42;
          --dark-green: #d1d6d4;
          --orange: #f7941d;
          --blue: #1b1c1d;

          --dark: #333333;
          --light-gray: #f2f2f2;
          --cream: #fffbe8;
          --white: #086b2e;
        }

        *{box-sizing:border-box;}
        body{margin:0;}

        /* ---- section shell ---- */
        .apc{
          background:var(--dark-green);
          color:var(--white);
          font-family:'Montserrat', sans-serif;
          position:relative;
          /* NOTE: no overflow:hidden here — it breaks position:sticky on .apc-scroll-sticky below */
        }
        .apc::before{
          content:"";
          position:absolute; inset:0;
          background-image:
            radial-gradient(circle at 85% 8%, rgba(247,148,29,0.10), transparent 45%),
            repeating-linear-gradient(115deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 90px);
          pointer-events:none;
          z-index:0;
        }
        .apc > *{ position:relative; z-index:1; }

        /* ---- container (mirrors .container-custom from globals.css) ---- */
        .apc-container{ margin:0 auto; max-width:80rem; padding:0 1.5rem; }
        @media (min-width:1024px){ .apc-container{ padding:0 2rem; } }

        /* ---- header ---- */
        .apc-head{
          display:flex; justify-content:space-between; align-items:flex-end;
          flex-wrap:wrap; gap:24px;
          padding-top:64px; padding-bottom:36px;
        }
        .apc-eyebrow{
          font-family:'Montserrat', sans-serif; font-weight:600;
          font-size:14px; letter-spacing:.5px;
          color:var(--orange); text-transform:uppercase; margin:0 0 10px;
        }
        .apc-title{
          font-family:'Playfair Display', serif; font-weight:700; letter-spacing:-0.5px;
          font-size:clamp(32px, 4.5vw, 56px); line-height:1.1; margin:0; color:var(--white);
        }
        .apc-title span{ color:var(--orange); }
        .apc-sub{
          font-family:'Montserrat', sans-serif; font-weight:400;
          max-width:360px; color:var(--blue); font-size:16px; line-height:1.6; margin:0;
        }

        /* ---- step tabs ---- */
        .apc-tabs{
          display:flex; flex-wrap:wrap; gap:2px; width:fit-content;
          background:rgba(255,255,255,0.08);
          margin-bottom:28px;
        }
        .apc-tab{
          appearance:none; border:0; cursor:pointer;
          background:transparent; color:var(--blue);
          font-family:'Montserrat', sans-serif; font-weight:600; font-size:14px;
          letter-spacing:.2px; text-transform:uppercase;
          padding:16px 22px;
          transition: color .25s ease, background .25s ease;
          border-bottom:2px solid transparent;
        }
        .apc-tab:hover{ color:var(--white); }
        .apc-tab.is-active{ color:var(--orange); background:rgba(247,148,29,0.12); border-bottom-color:var(--orange); }

        /* ---- horizontal progress bar ---- */
        .apc-progress{
          height:2px; background:rgba(255,255,255,0.14); position:relative;
          margin:0 1.5rem;
        }
        @media (min-width:1024px){ .apc-progress{ margin:0 2rem; } }
        .apc-progress-fill{
          position:absolute; top:0; left:0; height:2px; width:0%;
          background:var(--orange); transition:width .1s linear;
        }

        /* ---- horizontal scroll rig ---- */
        .apc-scroll-outer{ position:relative; } /* height set by JS */
        .apc-scroll-sticky{
          position:sticky; top:0; height:100vh;
          display:flex; flex-direction:column;
        }
        .apc-stage{
          flex:1 1 auto;
          min-height:0;
          display:flex; align-items:center;
          overflow:hidden;
          position:relative;
        }
        .apc-track{
          display:flex; align-items:stretch; height:100%;
          will-change:transform;
        }

        .apc-panel{
          flex:0 0 100vw;
          width:100vw;
          height:100%;
          display:grid;
          grid-template-columns: 1.4fr 1fr;
          align-items:stretch;
        }

        .apc-media{ position:relative; height:100%; overflow:hidden; }
        .apc-media img{
          width:100%; height:100%; object-fit:cover; display:block;
          filter:saturate(0.95) contrast(1.02);
        }
        .apc-num{
          font-family:'Playfair Display', serif; font-weight:700;
          font-size:min(9vw,140px); line-height:1;
          color:transparent; -webkit-text-stroke:1.4px rgba(255,255,255,0.35);
          position:absolute; top:28px; left:28px;
          pointer-events:none; user-select:none;
        }

        .apc-copy{ position:relative; display:flex; flex-direction:column; justify-content:center; height:100%; padding:6vh 6vw; }
        .apc-copy-eyebrow{
          display:flex; align-items:center; gap:12px;
          font-family:'Montserrat', sans-serif;
          font-size:13px; font-weight:600; letter-spacing:.4px;
          color:var(--orange); text-transform:uppercase; margin:0 0 14px;
        }
        .apc-copy-eyebrow::before{ content:""; width:28px; height:2px; background:var(--orange); display:inline-block; }
        .apc-copy h3{
          font-family:'Playfair Display', serif; font-weight:700;
          font-size:clamp(22px,2.4vw,30px); line-height:1.25; margin:0 0 16px; color:var(--white);
        }
        .apc-copy p{
          font-family:'Montserrat', sans-serif; font-weight:400;
          color:var(--blue); font-size:16px; line-height:1.7; margin:0 0 22px; max-width:42ch;
        }
        .apc-meta{ display:flex; gap:24px; flex-wrap:wrap; margin-bottom:24px; }
        .apc-meta div{
          font-family:'Montserrat', sans-serif; font-size:12px; font-weight:500;
          color:var(--blue); text-transform:uppercase; letter-spacing:.4px;
        }
        .apc-meta strong{
          display:block; color:var(--white); font-size:15px; font-weight:600;
          letter-spacing:0; text-transform:none; margin-top:3px;
        }

        .apc-bar{ display:inline-flex; align-items:stretch; }
        .apc-bar-label{
          background:var(--cream); color:var(--dark-green);
          font-family:'Montserrat', sans-serif; font-weight:600; font-size:14px;
          letter-spacing:.4px; text-transform:uppercase;
          padding:15px 20px; display:flex; align-items:center;
        }
        .apc-bar-arrow{
          background:var(--green); color:var(--white);
          width:48px; display:flex; align-items:center; justify-content:center;
          transition:background .2s ease;
        }
        .apc-panel.is-active .apc-bar-arrow{ background:var(--orange); }
        .apc-bar-arrow svg{ width:15px; height:15px; }

        .apc-hint{
          position:absolute; right:5vw; bottom:28px;
          display:flex; align-items:center; gap:10px;
          color:var(--blue); font-family:'Montserrat', sans-serif;
          font-size:12px; font-weight:500; letter-spacing:.4px; text-transform:uppercase;
        }
        .apc-hint svg{ width:16px; height:16px; }

        /* ---- final CTA ---- */
        .apc-cta{
          padding:70px 0 80px;
          border-top:1px solid rgba(255,255,255,0.14);
          display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:24px;
        }
        .apc-cta h4{
          font-family:'Playfair Display', serif; font-weight:700;
          font-size:clamp(20px,2.2vw,26px); margin:0; max-width:520px; line-height:1.3; color:var(--white);
        }
        .apc-cta-btn{
          background:var(--orange); color:var(--dark-green); border:0; cursor:pointer;
          font-family:'Montserrat', sans-serif; font-weight:600; font-size:14px;
          letter-spacing:.4px; text-transform:uppercase;
          padding:18px 30px; white-space:nowrap;
          transition:transform .2s ease, background .2s ease, color .2s ease;
        }
        .apc-cta-btn:hover{ background:var(--cream); color:var(--dark-green); transform:translateY(-2px); }

        /* ---- mobile: fall back to normal vertical stack ---- */
        @media (max-width:820px){
          .apc-scroll-sticky{ position:static; height:auto; }
          .apc-stage{ display:block; overflow:visible; }
          .apc-track{ flex-direction:column; transform:none !important; gap:64px; padding:0 6vw; height:auto; }
          .apc-panel{ width:100%; height:auto; grid-template-columns:1fr; gap:26px; }
          .apc-media{ height:auto; }
          .apc-media img{ height:auto; aspect-ratio:4/3; }
          .apc-copy{ height:auto; padding:0; }
          .apc-hint{ display:none; }
          .apc-progress{ display:none; }
        }
        @media (prefers-reduced-motion: reduce){
          .apc-track{ transition:none; }
        }
      `}</style>

      <section className="apc" id="admissions">
        <div className="apc-scroll-outer" id="apcScrollOuter">
          <div className="apc-scroll-sticky">
            <div className="apc-container">
              <div className="apc-head">
                <div>
                  <p className="apc-eyebrow">Join Prithvi Global School</p>
                  <h2 className="apc-title">
                    Admission Process<span>.</span>
                  </h2>
                </div>
                <p className="apc-sub">
                  Five clear steps from your first inquiry to your child's first day. Scroll down to move through
                  them.
                </p>
              </div>

              <nav className="apc-tabs" id="apcTabs">
                <button className="apc-tab is-active" data-index="0">
                  01 Inquiry
                </button>
                <button className="apc-tab" data-index="1">
                  02 School Tour
                </button>
                <button className="apc-tab" data-index="2">
                  03 Application
                </button>
                <button className="apc-tab" data-index="3">
                  04 Assessment
                </button>
                <button className="apc-tab" data-index="4">
                  05 Enrollment
                </button>
              </nav>
            </div>

            <div className="apc-progress">
              <div className="apc-progress-fill" id="apcProgressFill"></div>
            </div>

            <div className="apc-stage">
              <div className="apc-track" id="apcTrack">
                <article className="apc-panel is-active" data-index="0">
                <div className="apc-media">
                  <span className="apc-num">01</span>
                  <img
                    src="https://picsum.photos/seed/prithvi-inquiry/900/675"
                    alt="Parent filling an inquiry form at the school reception"
                  />
                </div>
                <div className="apc-copy">
                  <p className="apc-copy-eyebrow">Step 01</p>
                  <h3>Submit an Inquiry</h3>
                  <p>
                    Reach out through our website, phone, or front desk. Tell us your child's age and the grade
                    you're considering, and our admissions team will get back to you within 48 hours.
                  </p>
                  <div className="apc-meta">
                    <div>
                      Time needed
                      <strong>5 minutes</strong>
                    </div>
                    <div>
                      Response time
                      <strong>Within 48 hrs</strong>
                    </div>
                  </div>
                  <div className="apc-bar">
                    <span className="apc-bar-label">Start an Inquiry</span>
                    <span className="apc-bar-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>

              <article className="apc-panel" data-index="1">
                <div className="apc-media">
                  <span className="apc-num">02</span>
                  <img
                    src="https://picsum.photos/seed/prithvi-tour/900/675"
                    alt="Family touring the school campus with an admissions counsellor"
                  />
                </div>
                <div className="apc-copy">
                  <p className="apc-copy-eyebrow">Step 02</p>
                  <h3>Visit the Campus</h3>
                  <p>
                    Walk the classrooms, labs, and grounds with an admissions counsellor. Meet faculty, see a class
                    in session, and get a real feel for your child's day here.
                  </p>
                  <div className="apc-meta">
                    <div>
                      Time needed
                      <strong>45 minutes</strong>
                    </div>
                    <div>
                      Availability
                      <strong>Mon–Sat</strong>
                    </div>
                  </div>
                  <div className="apc-bar">
                    <span className="apc-bar-label">Book a Tour</span>
                    <span className="apc-bar-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>

              <article className="apc-panel" data-index="2">
                <div className="apc-media">
                  <span className="apc-num">03</span>
                  <img
                    src="https://picsum.photos/seed/prithvi-application/900/675"
                    alt="Parent completing the school application paperwork"
                  />
                </div>
                <div className="apc-copy">
                  <p className="apc-copy-eyebrow">Step 03</p>
                  <h3>Complete the Application</h3>
                  <p>
                    Submit the application form with your child's previous academic records, birth certificate, and
                    address proof. Our team reviews every file within five working days.
                  </p>
                  <div className="apc-meta">
                    <div>
                      Documents
                      <strong>4 required</strong>
                    </div>
                    <div>
                      Review time
                      <strong>5 working days</strong>
                    </div>
                  </div>
                  <div className="apc-bar">
                    <span className="apc-bar-label">Get Application Form</span>
                    <span className="apc-bar-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>

              <article className="apc-panel" data-index="3">
                <div className="apc-media">
                  <span className="apc-num">04</span>
                  <img
                    src="https://picsum.photos/seed/prithvi-assessment/900/675"
                    alt="Child taking a friendly grade-level assessment"
                  />
                </div>
                <div className="apc-copy">
                  <p className="apc-copy-eyebrow">Step 04</p>
                  <h3>Assessment &amp; Interaction</h3>
                  <p>
                    A short, age-appropriate assessment helps us understand your child's current level, followed by
                    a relaxed interaction with a parent and teacher — no stress, just a conversation.
                  </p>
                  <div className="apc-meta">
                    <div>
                      Format
                      <strong>Assessment + chat</strong>
                    </div>
                    <div>
                      Duration
                      <strong>30–40 minutes</strong>
                    </div>
                  </div>
                  <div className="apc-bar">
                    <span className="apc-bar-label">See What to Expect</span>
                    <span className="apc-bar-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>

              <article className="apc-panel" data-index="4">
                <div className="apc-media">
                  <span className="apc-num">05</span>
                  <img
                    src="https://picsum.photos/seed/prithvi-enrollment/900/675"
                    alt="Family celebrating enrollment with the school welcome kit"
                  />
                </div>
                <div className="apc-copy">
                  <p className="apc-copy-eyebrow">Step 05</p>
                  <h3>Offer &amp; Enrollment</h3>
                  <p>
                    Once accepted, confirm your seat with the enrollment fee and required paperwork. You'll receive
                    the uniform list, term calendar, and a welcome pack ahead of day one.
                  </p>
                  <div className="apc-meta">
                    <div>
                      Seat confirmation
                      <strong>Within 7 days</strong>
                    </div>
                    <div>
                      Welcome pack
                      <strong>Included</strong>
                    </div>
                  </div>
                  <div className="apc-bar">
                    <span className="apc-bar-label">Confirm Enrollment</span>
                    <span className="apc-bar-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
              </div>

              <div className="apc-hint">
                <span>Keep scrolling</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="apc-container">
          <div className="apc-cta">
            <h4>Ready to take the first step for your child?</h4>
            <button className="apc-cta-btn">Start Your Application</button>
          </div>
        </div>
      </section>
    </>
  );
}