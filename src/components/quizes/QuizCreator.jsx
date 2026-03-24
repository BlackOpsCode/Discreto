import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Footer from "../helpers/Footer";

export default function QuizCreator({ questions, title }) {
  const [answers,  setAnswers]  = useState(Array(questions.length).fill(null));
  const [score,    setScore]    = useState(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (qi, ai) => {
    if (revealed) return;
    const next = [...answers];
    next[qi] = ai;
    setAnswers(next);
  };

  const evaluate = () => {
    let correct = 0;
    questions.forEach((q, i) => { if (answers[i] === q.correct) correct++; });
    setScore(Math.round((correct / questions.length) * 100));
    setRevealed(true);
  };

  const reset = () => {
    setAnswers(Array(questions.length).fill(null));
    setScore(null);
    setRevealed(false);
  };

  const answered    = answers.filter(a => a !== null).length;
  const allAnswered = answered === questions.length;

  const scoreColor =
    score >= 80 ? "var(--accent)"   :
    score >= 50 ? "var(--warm)"     :
                  "#ff7b7b";

  return (
    <div className="quiz-scroller">

      {/* ── HEADER ── */}
      <div style={{
        width: "min(96%, 1300px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
        textAlign: "center",
        marginBottom: "0.4rem",
      }}>
        <span className="section-eyebrow">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M3.5 3C3.5 1.9 4.2 1 5 1s1.5.9 1.5 2c0 1-1.5 2-1.5 3"
              stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
            <circle cx="5" cy="8.5" r="0.8" fill="currentColor"/>
          </svg>
          knowledge check
        </span>

        <h1 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "clamp(1.4rem, 3vw, 2.8rem)",
          lineHeight: 1.1,
          letterSpacing: "0.05em",
          color: "var(--text-main)",
          margin: 0,
        }}>
          {title}
        </h1>

        {/* Progress bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginTop: "0.3rem",
        }}>
          <div style={{
            width: "clamp(160px, 30vw, 280px)",
            height: "4px",
            borderRadius: "999px",
            background: "var(--border-soft)",
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              width: `${(answered / questions.length) * 100}%`,
              background: "linear-gradient(90deg, var(--accent-3), var(--accent))",
              borderRadius: "999px",
              transition: "width 0.3s ease",
            }}/>
          </div>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.68rem",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
          }}>
            {answered}/{questions.length}
          </span>
        </div>
      </div>

      {/* ── QUESTIONS GRID ── */}
      <div className="scroller-grid" style={{ width: "min(96%, 1300px)" }}>
        {questions.map((q, idx) => {
          const userAnswer    = answers[idx];
          const isAnswered    = userAnswer !== null;
          const isCorrect     = revealed && userAnswer === q.correct;
          const isWrong       = revealed && isAnswered && userAnswer !== q.correct;

          return (
            <div
              key={idx}
              className="glass-box"
              style={{
                alignItems: "flex-start",
                textAlign: "left",
                gap: "0.85rem",
                padding: "clamp(1.1rem, 2.2vw, 1.6rem)",
                borderColor:
                  isCorrect ? "rgba(141,255,196,0.35)" :
                  isWrong   ? "rgba(255,123,123,0.35)" :
                  undefined,
                background:
                  isCorrect ? "linear-gradient(150deg, rgba(141,255,196,0.06), rgba(3,7,5,0.44))" :
                  isWrong   ? "linear-gradient(150deg, rgba(255,123,123,0.06), rgba(3,7,5,0.44))" :
                  undefined,
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
            >
              {/* Question number + text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", width: "100%" }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "var(--accent-3)",
                  opacity: 0.7,
                }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
                  fontWeight: 600,
                  color: "var(--text-main)",
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {q.question}
                </p>
              </div>

              {/* Options */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.45rem",
                width: "100%",
              }}>
                {q.answers.map((ans, ai) => {
                  const isSelected     = userAnswer === ai;
                  const isRightAnswer  = revealed && ai === q.correct;
                  const isWrongChoice  = revealed && isSelected && ai !== q.correct;

                  return (
                    <button
                      key={ai}
                      onClick={() => handleSelect(idx, ai)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.65rem",
                        width: "100%",
                        padding: "0.6rem 0.9rem",
                        borderRadius: "var(--radius-md)",
                        border: `1px solid ${
                          isRightAnswer  ? "rgba(141,255,196,0.4)"  :
                          isWrongChoice  ? "rgba(255,123,123,0.4)"  :
                          isSelected     ? "var(--border-mid)"       :
                                           "var(--border-soft)"
                        }`,
                        background:
                          isRightAnswer  ? "rgba(141,255,196,0.08)"  :
                          isWrongChoice  ? "rgba(255,123,123,0.08)"  :
                          isSelected     ? "var(--surface-mid)"       :
                                           "var(--surface)",
                        color:
                          isRightAnswer  ? "var(--accent)"   :
                          isWrongChoice  ? "#ff7b7b"          :
                          isSelected     ? "var(--text-main)" :
                                           "var(--text-soft)",
                        cursor: revealed ? "default" : "pointer",
                        textAlign: "left",
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(0.82rem, 1.1vw, 0.94rem)",
                        lineHeight: 1.5,
                        transition: "border-color 0.18s ease, background 0.18s ease, color 0.18s ease",
                      }}
                    >
                      {/* Dot indicator */}
                      <span style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        flexShrink: 0,
                        background:
                          isRightAnswer ? "var(--accent)"  :
                          isWrongChoice ? "#ff7b7b"         :
                          isSelected    ? "var(--accent-2)" :
                                          "var(--border-mid)",
                        boxShadow: isRightAnswer
                          ? "0 0 8px rgba(141,255,196,0.5)"
                          : "none",
                        transition: "background 0.18s ease",
                      }}/>
                      {ans}
                    </button>
                  );
                })}
              </div>

              {/* Revealed feedback */}
              {revealed && (
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  color: isCorrect ? "var(--accent)" : "#ff7b7b",
                  opacity: 0.85,
                }}>
                  {isCorrect ? "✓ correct" : `✗ correct answer: ${q.answers[q.correct]}`}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* ── EVALUATE BUTTON ── */}
      {!revealed && (
        <button
          onClick={evaluate}
          disabled={!allAnswered}
          style={{
            marginTop: "0.5rem",
            height: "46px",
            padding: "0 2.2rem",
            borderRadius: "999px",
            border: `1px solid ${allAnswered ? "var(--border-strong)" : "var(--border-soft)"}`,
            background: allAnswered
              ? "linear-gradient(135deg, var(--accent-3), var(--accent))"
              : "var(--surface)",
            color: allAnswered ? "#020704" : "var(--text-dim)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.78rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            cursor: allAnswered ? "pointer" : "not-allowed",
            transition: "all 0.22s ease",
            boxShadow: allAnswered ? "0 4px 20px rgba(93,232,168,0.22)" : "none",
          }}
        >
          {allAnswered ? "Evaluate →" : `Answer all questions (${answered}/${questions.length})`}
        </button>
      )}

      {/* ── SCORE PANEL ── */}
      {score !== null && (
        <div
          className="glass-box accent-card"
          style={{
            width: "min(96%, 1300px)",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            padding: "clamp(1.4rem, 3vw, 2.2rem)",
          }}
        >
          {/* Circular progress */}
          <div style={{ width: "110px", height: "110px", flexShrink: 0 }}>
            <CircularProgressbar
              value={score}
              text={`${score}%`}
              styles={buildStyles({
                textColor:  scoreColor,
                pathColor:  scoreColor,
                trailColor: "rgba(255,255,255,0.06)",
                textSize:   "22px",
              })}
            />
          </div>

          {/* Score text */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "0.5rem",
          }}>
            <span className="section-eyebrow" style={{ marginBottom: 0 }}>result</span>
            <h2 style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)",
              color: scoreColor,
              margin: 0,
              letterSpacing: "0.04em",
            }}>
              {score >= 80 ? "Excellent" : score >= 50 ? "Keep going" : "Try again"}
            </h2>
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(0.86rem, 1.2vw, 1rem)",
              color: "var(--text-muted)",
              margin: 0,
              lineHeight: 1.6,
            }}>
              {score >= 80
                ? "Strong grasp of the material. Ready for the next module."
                : score >= 50
                ? "Solid foundation — review the questions you missed."
                : "Revisit the theory module before retrying."}
            </p>

            <button
              onClick={reset}
              style={{
                marginTop: "0.4rem",
                height: "36px",
                padding: "0 1.4rem",
                borderRadius: "999px",
                border: "1px solid var(--border-mid)",
                background: "transparent",
                color: "var(--accent)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.18s ease, border-color 0.18s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(141,255,196,0.08)";
                e.currentTarget.style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "var(--border-mid)";
              }}
            >
              Retry →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}