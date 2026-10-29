"use client";

// iPhone 15 Pro screen size. The site runs at this size, then is scaled down to fit.
const W = 393;
const H = 852;
const SCALE = 0.76;

export function PhonePreview() {
  return (
    <div
      className="mx-auto rounded-[3.2rem] border border-[#3a3a3c] bg-[#0b0b0c] p-[10px]"
      style={{ width: W * SCALE + 20 }}
    >
      <div
        className="relative overflow-hidden rounded-[2.6rem] bg-background"
        style={{ width: W * SCALE, height: H * SCALE }}
      >
        <iframe
          src="/"
          title="Live preview of this portfolio at iPhone 15 Pro size"
          loading="lazy"
          className="absolute left-0 top-0 border-0 bg-background"
          style={{
            width: W,
            height: H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
          onLoad={(e) => {
            const frame = e.currentTarget;
            const doc = frame.contentDocument;
            if (!doc) return;

            // Hide scrollbars and the site's own cursor inside the phone
            const style = doc.createElement("style");
            style.textContent =
              "html{scrollbar-width:none} ::-webkit-scrollbar{display:none} html,body,*{cursor:none !important} .fixed.pointer-events-none{display:none !important}";
            doc.head.appendChild(style);

            // Pass the mouse position out to your page so your cursor keeps moving
            const forward = (ev: MouseEvent) => {
              const box = frame.getBoundingClientRect();
              const scale = box.width / frame.offsetWidth;
              document.dispatchEvent(
                new MouseEvent("mousemove", {
                  clientX: box.left + ev.clientX * scale,
                  clientY: box.top + ev.clientY * scale,
                  bubbles: true,
                })
              );
            };
            doc.addEventListener("mousemove", forward);
          }}
        />

        {/* Dynamic Island */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[10px] h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-black"
        />
      </div>
    </div>
  );
}