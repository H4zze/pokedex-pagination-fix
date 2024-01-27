export default function DisplayStat({ statType, statValue }: { statType: string; statValue: number }) {
  return (
    <div className="flex pb-3">
      <p className="font-medium">{statType}</p>: {statValue}
    </div>
  );
}
