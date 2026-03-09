import { Tag } from "./Tag";

interface WordVaultTagCloudProps {
  tags: string[];
  activeTag?: string | null;
  onSelect?: (tag: string) => void;
  className?: string;
}

export function WordVaultTagCloud({ 
  tags, 
  activeTag = null, 
  onSelect, 
  className = "" 
}: WordVaultTagCloudProps) {
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
