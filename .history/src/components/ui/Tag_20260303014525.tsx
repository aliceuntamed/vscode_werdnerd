interface TagProps {
  label: string;
  index?: number; // used for gradient cycling
  onClick?: () => void; // optional: makes tag a button
  className?: string; // optional: extra styling
}

const chromeGradients = [
  "linear-gradient(135deg, #667eea, #764ba2)", // violet chrome
  "linear-gradient(135deg, #f093fb, #f5576c)", // pink chrome
  "linear-gradient(135deg, #4facfe, #00f2fe)", // blue chrome
  "linear-gradient(135deg, #43e97b, #38f9d7)", // green chrome
  "linear-gradient(135deg, #fa709a, #fee140)", // sunrise chrome
  "linear-gradient(135deg, #e0e0e0, #757575)", // silver chrome
  "linear-gradient(135deg, #bdc3c7, #2c3e50)", // metallic chrome
];

export function Tag({ label, index = 0, onClick, className = "" }: TagProps) {
  const gradient = chromeGradients[index % chromeGradients.length];

  const baseClasses = `
      px-3 py-1 rounded-full text-xs font-heading text-white shadow-sm
      border border-white/10
      hover:opacity-90 transition
    `;

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${className}`}
        style={{ background: gradient }}
      >
        {label}
      </button>
    );
  }

  return (
    <span
      className={`${baseClasses} ${className}`}
      style={{ background: gradient }}
    >
      {label}
    </span>
  );
}
