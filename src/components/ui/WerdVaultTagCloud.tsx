import { Tag } from "./Tag";

interface WerdVaultTagCloudProps {
  tags: string[];
  activeTag?: string | null;
  onSelect?: (tag: string) => void;
  className?: string;
}

export function WerdVaultTagCloud({
  tags,
  activeTag = null,
  onSelect,
  className = "",
}: WerdVaultTagCloudProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {tags.map((tag, i) => (
        <Tag
          key={i}
          label={tag}
          index={i}
          onClick={() => onSelect?.(tag)}
          className={`
            cursor-pointer transition-all
            ${activeTag === tag ? "ring-2 ring-white/40" : ""}
          `}
        />
      ))}
    </div>
  );
}
