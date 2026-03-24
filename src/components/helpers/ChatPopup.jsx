import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

/* ─── inline responsive overrides ─── */
const popupCSS = `
  .chat-popup-overlay {
    position: fixed;
    inset: 0;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: rgba(2, 7, 4, 0.72);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .chat-popup-box {
    position: relative;
    width: min(96vw, 680px);
    height: min(85vh, 680px);
    border-radius: 22px;
    border: 1px solid rgba(141,255,196,0.18);
    background:
      linear-gradient(150deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 50%, rgba(141,255,196,0.012) 100%),
      rgba(3,7,5,0.88);
    backdrop-filter: blur(24px) saturate(1.3);
    -webkit-backdrop-filter: blur(24px) saturate(1.3);
    box-shadow: 0 24px 64px rgba(0,0,0,0.55), 0 0 48px rgba(80,220,148,0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1.2rem 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    scrollbar-width: thin;
    scrollbar-color: rgba(141,255,196,0.2) transparent;
  }

  .chat-messages::-webkit-scrollbar {
    width: 4px;
  }
  .chat-messages::-webkit-scrollbar-thumb {
    background: rgba(141,255,196,0.2);
    border-radius: 999px;
  }

  .chat-input-row {
    padding: 0.9rem 1.2rem;
    border-top: 1px solid rgba(141,255,196,0.08);
    display: flex;
    gap: 0.6rem;
    align-items: flex-end;
    background: rgba(255,255,255,0.018);
  }

  .chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.9rem;
    padding: 1rem 1.4rem 0.9rem;
    border-bottom: 1px solid rgba(141,255,196,0.08);
  }

  .chat-header-left {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    min-width: 0;
    flex: 1;
    flex-wrap: wrap;
  }

  .chat-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    color: var(--text-main);
    font-weight: 600;
    white-space: nowrap;
  }

  .chat-subtitle {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.12em;
    color: var(--accent-3);
    opacity: 0.7;
    text-transform: uppercase;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  .chat-close-btn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.07);
    background: rgba(255,255,255,0.03);
    color: var(--text-muted);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
    font-size: 1rem;
    line-height: 1;
    flex-shrink: 0;
  }

  .chat-close-btn:hover {
    background: rgba(255,255,255,0.07);
    color: var(--text-main);
    border-color: rgba(255,255,255,0.14);
  }

  .chat-textarea {
    flex: 1;
    resize: none;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px;
    padding: 0.65rem 0.9rem;
    color: var(--text-main);
    font-family: 'Syne', sans-serif;
    font-size: 0.9rem;
    line-height: 1.5;
    outline: none;
    transition: border-color 0.18s ease;
    max-height: 120px;
    overflow-y: auto;
    width: 100%;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .chat-textarea::placeholder {
    color: var(--text-dim);
    opacity: 0.7;
  }

  .chat-send-btn {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.18s ease;
  }

  @media (max-width: 480px) {
    .chat-popup-overlay {
      padding: 0.5rem;
      align-items: stretch;
    }

    .chat-popup-box {
      width: calc(100vw - 1rem);
      height: 92svh;
      border-radius: 16px;
    }

    .chat-header {
      padding: 0.9rem 0.9rem 0.75rem;
      align-items: flex-start;
    }

    .chat-header-left {
      gap: 0.45rem;
    }

    .chat-title {
      font-size: 0.8rem;
    }

    .chat-subtitle {
      font-size: 0.55rem;
      letter-spacing: 0.08em;
      line-height: 1.2;
    }

    .chat-messages {
      padding: 0.9rem;
      gap: 0.7rem;
    }

    .chat-input-row {
      padding: 0.75rem 0.9rem;
      flex-direction: column;
      align-items: stretch;
    }

    .chat-textarea {
      min-height: 48px;
      font-size: 0.92rem;
    }

    .chat-send-btn {
      width: 100%;
      height: 44px;
      border-radius: 12px;
    }
  }
`;

/* ─── message bubble ─── */
function Bubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: "82%",
          padding: "0.7rem 1rem",
          borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
          background: isUser
            ? "linear-gradient(135deg, rgba(141,255,196,0.15), rgba(93,232,168,0.1))"
            : "rgba(255,255,255,0.04)",
          border: `1px solid ${isUser ? "rgba(141,255,196,0.25)" : "rgba(255,255,255,0.07)"}`,
          color: isUser ? "var(--text-main)" : "var(--text-soft)",
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(0.84rem, 1.1vw, 0.96rem)",
          lineHeight: 1.65,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflowWrap: "anywhere",
        }}
      >
        {content}
      </div>
    </div>
  );
}

/* ─── typing indicator ─── */
function TypingDots() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "0.5rem 0.2rem" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--accent-3)",
            animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

const SYSTEM_PROMPT = `You are Discreto — an intelligent physics guide embedded in an interactive statistical mechanics learning platform. You have deep expertise in:
- Statistical mechanics (microstates, macrostates, ensembles, partition functions)
- Thermodynamics (entropy, temperature, equilibrium, fluctuations)
- Quantum statistics (Fermi-Dirac, Bose-Einstein distributions)
- Kinetic theory (Maxwell-Boltzmann, ideal gases, pressure)
- Critical phenomena and phase transitions

You explain concepts with physical intuition first, then mathematical precision. You use analogies, thought experiments, and concrete examples. When relevant, describe formulas in words (since LaTeX doesn't render in this chat). You are concise but thorough. You never refuse physics questions. You occasionally reference the simulations and learning modules available on this platform.`;

export default function ChatPopup({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const boxRef = useRef(null);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello — I'm Discreto. Ask me anything about statistical mechanics, thermodynamics, or quantum statistics. Where would you like to start?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  /* ── GSAP animate in ── */
  useEffect(() => {
    if (!isOpen || !overlayRef.current || !boxRef.current) return;

    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(boxRef.current, { opacity: 0, scale: 0.88, y: 24 });

    gsap.to(overlayRef.current, { opacity: 1, duration: 0.28, ease: "power2.out" });
    gsap.to(boxRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.38,
      ease: "back.out(1.4)",
      delay: 0.05,
    });

    const t = setTimeout(() => inputRef.current?.focus(), 420);
    return () => clearTimeout(t);
  }, [isOpen]);

  /* ── GSAP animate out ── */
  const handleClose = useCallback(() => {
    if (!overlayRef.current || !boxRef.current) {
      onClose();
      return;
    }

    gsap.to(boxRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 16,
      duration: 0.22,
      ease: "power2.in",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.28,
      ease: "power2.in",
      delay: 0.06,
      onComplete: onClose,
    });
  }, [onClose]);

  /* ── close on Escape ── */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, handleClose]);

  /* ── scroll to bottom on new message ── */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* ── send message ── */
  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: "user", content: text };
    const nextMessages = [...messages, userMsg];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const reply = data?.content?.[0]?.text ?? "Something went wrong. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection error. Please check your network and try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages]);

  /* ── handle Enter key ── */
  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{popupCSS}</style>

      <div
        ref={overlayRef}
        className="chat-popup-overlay"
        onClick={(e) => {
          if (e.target === overlayRef.current) handleClose();
        }}
      >
        <div ref={boxRef} className="chat-popup-box">
          <div className="chat-header">
            <div className="chat-header-left">
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 10px rgba(141,255,196,0.5)",
                  animation: "glowPulse 2s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              <span className="chat-title">Discreto</span>
              <span className="chat-subtitle">· statistical mechanics AI</span>
            </div>

            <button
              onClick={handleClose}
              className="chat-close-btn"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} content={m.content} />
            ))}
            {loading && <TypingDots />}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-row">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about entropy, ensembles, quantum gases…"
              rows={1}
              className="chat-textarea"
              onFocus={(e) => (e.target.style.borderColor = "rgba(141,255,196,0.25)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.07)")}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
              }}
            />

            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="chat-send-btn"
              style={{
                borderColor: input.trim() && !loading ? "var(--border-mid)" : "var(--border-ghost)",
                background: input.trim() && !loading
                  ? "linear-gradient(135deg, var(--accent-3), var(--accent))"
                  : "rgba(255,255,255,0.025)",
                color: input.trim() && !loading ? "#020704" : "var(--text-dim)",
                cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                boxShadow: input.trim() && !loading ? "0 4px 14px rgba(93,232,168,0.2)" : "none",
              }}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 8 L3 3 L5.5 8 L3 13 Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}