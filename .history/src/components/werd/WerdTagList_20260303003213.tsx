interface WerdTagListProps {
  tags: string[];
}

export function WerdTagList({ tags }: WerdTagListProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="
              px-3 py-1 rounded-full text-xs font-heading
              bg-white/5 border border-white/10 text-white/70
              hover:bg-white/10 hover:text-white transition
            "
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
