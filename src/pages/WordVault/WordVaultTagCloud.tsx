import { Tag } from "../../components/ui/Tag";

interface WordVaultTagCloudProps {
  tags: string[];
  activeTag?: string | null;
  onSelect: (tag: string) => void;
}

export function WordVaultTagCloud({
  tags,
  activeTag,
  onSelect,
}: WordVaultTagCloudProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag: string, i: number) => (
        <Tag
          key={tag}
          label={tag}
          index={i}
          onClick={() => onSelect(tag)}
          className={`
            cursor-pointer
            ${activeTag === tag ? "ring-2 ring-white/40" : ""}
          `}
        />
      ))}
    </div>
  );
}
