interface WerdTagListProps {
  tags: string[];
}

const chromeGradients = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)",
  "linear-gradient(135deg, #e0e0e0, #757575)",
  "linear-gradient(135deg, #bdc3c7, #2c3e50)",
];

export function WerdTagList({ tags }: WerdTagListProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag, i) => {
        const gradient = chromeGradients[i % chromeGradients.length];

        return (
          <span
            key={tag}
            className="
                px-3 py-1 rounded-full text-xs font-heading text-white shadow-sm
                border border-white/10
                hover:opacity-90 transition
              "
            style={{ background: gradient }}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}
