export function WerdCard({ werd, definition }) {
  return (
    <Card>
      <h3 className="font-heading text-2xl mb-2 bg-chrome-horizontal bg-clip-text text-transparent">
        {werd}
      </h3>
      <p className="text-text-muted text-sm">{definition}</p>
    </Card>
  );
}
