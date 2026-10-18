import { motion, useReducedMotion } from "framer-motion";

// Lightweight animated technical visualization: an abstract RAG / node-network.
export default function HeroVisual() {
  const reduce = useReducedMotion();

  const nodes = [
    { x: 50, y: 50, r: 5, label: "core", main: true },
    { x: 18, y: 22, r: 3 },
    { x: 82, y: 24, r: 3 },
    { x: 16, y: 78, r: 3 },
    { x: 84, y: 76, r: 3 },
    { x: 50, y: 12, r: 2.5 },
    { x: 50, y: 88, r: 2.5 },
  ];
  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 5], [2, 5], [3, 6], [4, 6],
  ];

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <div className="absolute inset-0 grain opacity-60" />
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.18" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#glow)" />

        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="hsl(var(--foreground))"
            strokeWidth="0.2"
            strokeOpacity="0.25"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={reduce ? {} : { pathLength: 1, opacity: 0.25 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: "easeOut" }}
          />
        ))}

        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.main ? "hsl(var(--accent))" : "hsl(var(--foreground))"}
            initial={reduce ? false : { scale: 0, opacity: 0 }}
            animate={reduce ? {} : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
        ))}

        {!reduce &&
          [0, 1, 2, 3].map((i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={nodes[i].x}
              cy={nodes[i].y}
              r={nodes[i].r}
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="0.3"
              animate={{ r: [nodes[i].r, nodes[i].r + 8], opacity: [0.6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
            />
          ))}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="font-mono-label text-muted-foreground mb-1">system</div>
          <div className="font-mono text-xs text-accent">rag · pipeline</div>
        </div>
      </div>
    </div>
  );
}