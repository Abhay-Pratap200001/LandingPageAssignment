// src/components/AnimatedSelect.jsx
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";

const AnimatedSelect = ({ label, options = [] }) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState(null); // { top, left, width }
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  // compute and set menu position (below the trigger)
  const updatePosition = () => {
    const btn = triggerRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    setCoords({
      top: rect.bottom + window.scrollY + 6, // 6px gap
      left: rect.left + window.scrollX,
      width: rect.width, // optional: match trigger width
    });
  };

  // open/close + position update
  useEffect(() => {
    if (open) {
      updatePosition();
    }
  }, [open]);

  // reposition on scroll/resize to keep it under trigger
  useEffect(() => {
    if (!open) return;
    const handler = () => updatePosition();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [open]);


  // close when clicking outside menu or trigger
  useEffect(() => {
    const onDocClick = (e) => {
      if (
        triggerRef.current &&
        (triggerRef.current.contains(e.target) ||
          (menuRef.current && menuRef.current.contains(e.target)))
      ) {
        // click inside trigger or menu => ignore
        return;
      }
      setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);



  // Keep coordinates current if layout changes quickly after mount
  useLayoutEffect(() => {
    if (open) updatePosition();
  }, [open]);

  // Portal DOM node (lazy create)
  const portalRoot = (() => {
    if (typeof document === "undefined") return null;
    let el = document.getElementById("animated-select-root");
    if (!el) {
      el = document.createElement("div");
      el.id = "animated-select-root";
      document.body.appendChild(el);
    }
    return el;
  })();


  
  return (
    <>
      <div
        ref={triggerRef}
        className="relative inline-block"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => {
          // short delay helps avoid quick flicker when moving mouse
          setTimeout(() => {
            if (menuRef.current) {
              // if pointer is over menu, don't close
              const overMenu = menuRef.current.matches(":hover");
              if (!overMenu) setOpen(false);
            } else {
              setOpen(false);
            }
          }, 120);
        }}
      >
        <button
          type="button"
          className="text-xs font-bold text-gray-900 bg-transparent border-none outline-none cursor-pointer hover:text-gray-400 pl-2 flex items-center space-x-1"
          onClick={() => setOpen((s) => !s)}
        >
          <span>{label}</span>
          <ChevronDown
            size={12}
            className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      {portalRoot &&
        coords &&
        createPortal(
          <div
            ref={menuRef}
            // menu wrapper is positioned fixed so it's always relative to viewport
            style={{
              position: "absolute",
              top: coords.top,
              left: coords.left,
              minWidth: coords.width, // match trigger width, optional
              zIndex: 9999,
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`bg-white border border-gray-200 rounded-md shadow-md overflow-hidden transition-all duration-200 transform origin-top-left ${
              open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
            }`}
          >
            {options.map((opt, i) => (
              <div
                key={i}
                className="px-3 py-2 text-xs text-gray-800 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  // handle click (if needed) — currently only closes the menu
                  setOpen(false);
                }}
              >
                {opt}
              </div>
            ))}
          </div>,
          portalRoot
        )}
    </>
  );
};

export default AnimatedSelect;
