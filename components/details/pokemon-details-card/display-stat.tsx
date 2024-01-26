export default function DisplayStat({ statType, statValue }: { statType: string; statValue: number }) {
  return (
    <div className="bg-orange-300 p-1 rounded">
      {statType}: {statValue}
    </div>
  );
}
