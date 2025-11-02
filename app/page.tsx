"use client";

import { useEffect, useMemo, useState } from "react";

type Topic = {
  id: string;
  title: string;
  description: string;
};

type Course = {
  id: string;
  code: string;
  title: string;
  topics: Topic[];
};

const courseCatalog: Course[] = [
  {
    id: "maths-101",
    code: "Maths 101",
    title: "Mathematics Foundations",
    topics: [
      {
        id: "limits",
        title: "Limits & Continuity",
        description: "Understanding limit laws, continuity tests, and epsilon-delta intuition.",
      },
      {
        id: "derivatives",
        title: "Derivative Arsenal",
        description: "Product, quotient, and chain rules; differentiating implicit functions.",
      },
      {
        id: "integrals",
        title: "Integral Tactics",
        description: "Definite vs indefinite integrals, substitution, and area computations.",
      },
      {
        id: "series",
        title: "Series & Convergence",
        description: "Sequences, convergence tests, Taylor expansions, and error bounds.",
      },
      {
        id: "vectors",
        title: "Vector Maneuvers",
        description: "Vector algebra, dot/cross products, and analytic geometry essentials.",
      },
    ],
  },
  {
    id: "physics-101",
    code: "Physics 101",
    title: "Classical Mechanics",
    topics: [
      {
        id: "kinematics",
        title: "Kinematic Shadows",
        description: "1D & 2D motion, projectile analysis, and frame transformations.",
      },
      {
        id: "dynamics",
        title: "Force Recon",
        description: "Newton's laws, free-body mastery, friction models, and drag.",
      },
      {
        id: "work-energy",
        title: "Energy Sentience",
        description: "Work-energy theorem, power, and conservative force fields.",
      },
      {
        id: "momentum",
        title: "Momentum Dominion",
        description: "Impulse, collisions, center-of-mass motion, and rocket dynamics.",
      },
      {
        id: "rotational",
        title: "Rotational Realms",
        description: "Torque, angular acceleration, and rotational kinetic energy.",
      },
    ],
  },
  {
    id: "physics-107",
    code: "Physics 107",
    title: "Physics Lab Operations",
    topics: [
      {
        id: "lab-safety",
        title: "Lab Protocols",
        description: "Safety briefing, apparatus handling, and measurement ethics.",
      },
      {
        id: "error-analysis",
        title: "Error Analysis",
        description: "Uncertainty propagation, random vs systematic errors, plotting.",
      },
      {
        id: "mechanics-lab",
        title: "Mechanics Experiment",
        description: "Ticker tape motion study and conservation of momentum trials.",
      },
      {
        id: "optics-lab",
        title: "Optics Expedition",
        description: "Refraction, lens equation validation, and optical bench setup.",
      },
      {
        id: "reporting",
        title: "Shadow Reports",
        description: "Scientific documentation, lab notebooks, and peer briefings.",
      },
    ],
  },
  {
    id: "gst-101",
    code: "GST 101",
    title: "Use of English",
    topics: [
      {
        id: "comprehension",
        title: "Comprehension Forge",
        description: "Active reading, critical analysis, and mnemonic extraction.",
      },
      {
        id: "grammar",
        title: "Grammar Arsenal",
        description: "Tenses, concord, modifiers, and punctuation precision drills.",
      },
      {
        id: "writing",
        title: "Academic Writing",
        description: "Essay structure, thesis statements, and argument cohesion.",
      },
      {
        id: "vocabulary",
        title: "Lexicon Expansion",
        description: "Academic vocabulary, contextual usage, and retention hacks.",
      },
      {
        id: "presentation",
        title: "Speechcraft",
        description: "Oral presentation tactics and confidence conditioning.",
      },
    ],
  },
  {
    id: "gst-111",
    code: "GST 111",
    title: "Use of Library",
    topics: [
      {
        id: "catalogue",
        title: "Library Cartography",
        description: "Catalog systems, call numbers, and resource navigation.",
      },
      {
        id: "digital-library",
        title: "Digital Archives",
        description: "E-library portals, authentication, and database search skills.",
      },
      {
        id: "referencing",
        title: "Citation Mastery",
        description: "APA vs IEEE, in-text citations, and bibliography automation.",
      },
      {
        id: "research-cycle",
        title: "Research Loop",
        description: "Topic selection, query refinement, and source evaluation.",
      },
      {
        id: "info-ethics",
        title: "Information Ethics",
        description: "Plagiarism firewall, academic honesty, and privacy norms.",
      },
    ],
  },
  {
    id: "cos-103",
    code: "COS 103",
    title: "Computer Hardware",
    topics: [
      {
        id: "architecture",
        title: "System Architecture",
        description: "Von Neumann vs Harvard, CPU pipelines, and buses.",
      },
      {
        id: "components",
        title: "Component Forge",
        description: "Motherboards, chipsets, power units, and thermal design.",
      },
      {
        id: "memory",
        title: "Memory Realms",
        description: "SRAM vs DRAM, cache hierarchies, and storage arrays.",
      },
      {
        id: "peripherals",
        title: "Peripheral Legion",
        description: "Input/output interfaces, controllers, and device protocols.",
      },
      {
        id: "troubleshooting",
        title: "Hardware Diagnostics",
        description: "POST codes, signal tracing, and replacement strategies.",
      },
    ],
  },
  {
    id: "cos-101",
    code: "COS 101",
    title: "General Computer Science",
    topics: [
      {
        id: "computing-history",
        title: "History & Impact",
        description: "Evolution of computing, cyber ethics, and societal influence.",
      },
      {
        id: "os",
        title: "Operating Systems",
        description: "Process lifecycles, memory allocation, and access control.",
      },
      {
        id: "networking",
        title: "Network Fundamentals",
        description: "OSI model, TCP/IP stack, and security perimeters.",
      },
      {
        id: "programming",
        title: "Programming Constructs",
        description: "Algorithms, data structures, and pseudo-code fluency.",
      },
      {
        id: "cybersecurity",
        title: "Cyber Defense Intro",
        description: "Threat taxonomy, CIA triad, and risk mitigation layers.",
      },
    ],
  },
  {
    id: "statistics",
    code: "Statistics",
    title: "Probability & Statistics",
    topics: [
      {
        id: "data-collection",
        title: "Data Harvest",
        description: "Sampling techniques, experimental design, and bias control.",
      },
      {
        id: "descriptive",
        title: "Descriptive Intel",
        description: "Measures of center, spread, and data visualization.",
      },
      {
        id: "probability",
        title: "Probability Realms",
        description: "Discrete/continuous distributions, Bayes theorem, independence.",
      },
      {
        id: "inferential",
        title: "Inference Engine",
        description: "Confidence intervals, hypothesis testing, and p-value decoding.",
      },
      {
        id: "regression",
        title: "Regression Arsenal",
        description: "Linear models, residual diagnostics, and predictive checks.",
      },
    ],
  },
];

const STORAGE_KEY = "solo-learning-progress";

type ProgressMap = Record<string, Record<string, boolean>>;

type CourseMetrics = Course & {
  completedTopics: number;
  totalTopics: number;
  percent: number;
};

const buildDefaultProgress = (): ProgressMap => {
  return courseCatalog.reduce<ProgressMap>((acc, course) => {
    acc[course.id] = course.topics.reduce<Record<string, boolean>>((topicAcc, topic) => {
      topicAcc[topic.id] = false;
      return topicAcc;
    }, {});
    return acc;
  }, {});
};

const mergeProgress = (base: ProgressMap, stored?: unknown): ProgressMap => {
  if (!stored || typeof stored !== "object") {
    return base;
  }

  const snapshot = stored as ProgressMap;
  return courseCatalog.reduce<ProgressMap>((acc, course) => {
    const baseTopics = base[course.id];
    const storedTopics = snapshot?.[course.id] ?? {};
    acc[course.id] = course.topics.reduce<Record<string, boolean>>((topicAcc, topic) => {
      topicAcc[topic.id] = Boolean(storedTopics?.[topic.id]);
      return topicAcc;
    }, { ...baseTopics });
    return acc;
  }, {});
};

const calculateCourseMetrics = (progress: ProgressMap): CourseMetrics[] =>
  courseCatalog.map((course) => {
    const topicsState = progress[course.id] ?? {};
    const totalTopics = course.topics.length;
    const completedTopics = course.topics.filter((topic) => topicsState[topic.id]).length;
    const percent = totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);
    return {
      ...course,
      completedTopics,
      totalTopics,
      percent,
    };
  });

const levelFromMastery = (mastery: number): number => 100 + Math.floor(mastery / 5);

const nextMilestone = (mastery: number): number => Math.min(100, Math.ceil(mastery / 10) * 10 || 10);

const formatPercent = (value: number) => `${value.toFixed(0)}%`;

const ProgressRing = ({ percent, gradientId }: { percent: number; gradientId: string }) => {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, percent));
  const dashOffset = circumference * (1 - clamped / 100);

  return (
    <div className="progress-ring">
      <svg width="60" height="60">
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="100%" stopColor="var(--accent-pink)" />
          </linearGradient>
        </defs>
        <circle
          className="progress-ring__track"
          strokeDasharray={circumference}
          strokeDashoffset={0}
          cx="30"
          cy="30"
          r={radius}
        />
        <circle
          className="progress-ring__indicator"
          stroke={`url(#${gradientId})`}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          cx="30"
          cy="30"
          r={radius}
        />
      </svg>
      <span className="progress-ring__value">{formatPercent(clamped)}</span>
    </div>
  );
};

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.75 8.5L6.8 11.5L12.25 5.5"
      stroke="#ffe4ff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home() {
  const [progress, setProgress] = useState<ProgressMap>(() => buildDefaultProgress());
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    courseCatalog.reduce<Record<string, boolean>>((acc, course) => {
      acc[course.id] = true;
      return acc;
    }, {})
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setProgress((prev) => mergeProgress(prev, parsed));
      }
    } catch (error) {
      console.warn("Failed to parse stored progress", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress, hydrated]);

  const metrics = useMemo(() => {
    const courseMetrics = calculateCourseMetrics(progress);
    const totalTopics = courseMetrics.reduce((sum, course) => sum + course.totalTopics, 0);
    const completedTopics = courseMetrics.reduce((sum, course) => sum + course.completedTopics, 0);
    const mastery = courseMetrics.length
      ? Math.round(
          courseMetrics.reduce((sum, course) => sum + course.percent, 0) / courseMetrics.length
        )
      : 0;
    const overall = totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);
    const level = levelFromMastery(mastery);
    const nextPower = mastery >= 100 ? 100 : nextMilestone(mastery);

    return {
      courseMetrics,
      totalTopics,
      completedTopics,
      mastery,
      overall,
      level,
      nextPower,
    };
  }, [progress]);

  const toggleTopic = (courseId: string, topicId: string) => {
    setProgress((prev) => {
      const courseState = prev[courseId] ?? {};
      const nextCourseState = {
        ...courseState,
        [topicId]: !courseState[topicId],
      };
      return {
        ...prev,
        [courseId]: nextCourseState,
      };
    });
  };

  const toggleExpand = (courseId: string) => {
    setExpanded((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  return (
    <main className="scroll-container">
      <section className="hero">
        <span className="level-badge">
          <span>{`Level ${metrics.level}`}</span>
          <span>{metrics.mastery >= 100 ? "Ascended" : "Level Up Ready"}</span>
        </span>
        <h1 className="hero-title">Solo Learning Command Hub</h1>
        <p className="hero-subtitle">
          Cornelius, welcome back to your Shadow Monarch study sanctum. Track mastery, deploy revision
          strikes, and ascend through your Cyber Security training with surgical precision.
        </p>
      </section>

      <section className="overview">
        <div className="overview-content">
          <div className="overview-stat">
            <h3>Total Progress</h3>
            <strong>{formatPercent(metrics.overall)}</strong>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${metrics.overall}%` }} />
            </div>
          </div>
          <div className="overview-stat">
            <h3>Topics Mastered</h3>
            <strong>{`${metrics.completedTopics}/${metrics.totalTopics}`}</strong>
            <span className="summary-pill">{`Shadow mastery ${formatPercent(metrics.mastery)}`}</span>
          </div>
          <div className="overview-stat">
            <h3>Next Level Threshold</h3>
            <strong>
              {metrics.mastery >= 100
                ? "Level Up!"
                : `${metrics.mastery}% → ${metrics.nextPower}%`}
            </strong>
            <span className="summary-pill">Maintain a 3-day revision streak</span>
          </div>
        </div>
        <div className="summary-row">
          <div className="summary-pill">Cyber Security Rank: Shadow Monarch Cadre</div>
          <div className="summary-pill">Focus Directive: 3 priority quests daily</div>
          <div className="summary-pill">Aura Status: Stable</div>
        </div>
      </section>

      <section className="dashboard-grid">
        {metrics.courseMetrics.map((course) => {
          const gradientId = `${course.id}-gradient`;
          const expandedState = expanded[course.id];
          return (
            <article key={course.id} className="shadow-card">
              <header className="course-header">
                <div>
                  <h2 className="course-title">{course.code}</h2>
                  <p style={{ margin: "6px 0 0", color: "var(--text-muted)", fontSize: "0.92rem" }}>
                    {course.title}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <ProgressRing percent={course.percent} gradientId={gradientId} />
                  <button
                    type="button"
                    onClick={() => toggleExpand(course.id)}
                    style={{
                      border: "1px solid rgba(120, 134, 255, 0.45)",
                      background: "rgba(20, 24, 46, 0.65)",
                      color: "var(--text-muted)",
                      borderRadius: "12px",
                      padding: "8px 14px",
                      cursor: "pointer",
                      fontWeight: 500,
                      letterSpacing: "0.4px",
                    }}
                  >
                    {expandedState ? "Collapse" : "Expand"}
                  </button>
                </div>
              </header>

              {expandedState && (
                <div className="topic-list">
                  {course.topics.map((topic) => {
                    const checked = progress[course.id]?.[topic.id] ?? false;
                    return (
                      <label key={topic.id} className={`topic-item${checked ? " checked" : ""}`}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleTopic(course.id, topic.id)}
                        />
                        <span className="topic-checkbox" aria-hidden="true">
                          <CheckIcon />
                        </span>
                        <span className="topic-label">
                          <span>{topic.title}</span>
                          <span>{topic.description}</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}
