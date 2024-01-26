import Link from "next/link";

export default function PokemonToggle({ currentIndex }: { currentIndex: string }) {
  const [previousIndex, nextIndex] = calculateIndicies(parseInt(currentIndex));
  return (
    <div className="flex gap-6">
      <Link href={`/details/${previousIndex}`}>
        <div className="bg-white/90 my-3 p-3 rounded">Previous</div>
      </Link>
      <Link href={`/details/${nextIndex}`}>
        <div className="bg-white/90 my-3 p-3 rounded">Next</div>
      </Link>
    </div>
  );
}

// This functions takes the current index and returns the previous and next index, only indicies between 1 and 151 are valid
function calculateIndicies(currentIndex: number) {
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  if (previousIndex < 1) {
    return [151, nextIndex];
  } else if (nextIndex > 151) {
    return [previousIndex, 1];
  } else {
    return [previousIndex, nextIndex];
  }
}
