import { Tag } from "../ui/Tag";

export default function QuickBrowse({ tags, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <Tag
          key={tag}
          label={tag}
          index={i}
          onClick={() => onSelect(tag)}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
}
