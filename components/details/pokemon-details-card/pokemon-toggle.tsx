import Link from "next/link";

export default function PokemonToggle({ currentIndex }: { currentIndex: number }) {
  const [previousIndex, nextIndex] = calculateIndicies(currentIndex);
  return (
    <div className="flex justify-between gap-6 z-10 px-4 md:px-12 lg:px-24 absolute w-full bottom-0">
      <Link href={`/details/${previousIndex}`}>
        <p className="lilita-one border-b-2 border-gray-300">« Prev #{previousIndex}</p>
      </Link>
      <Link href={`/details/${nextIndex}`}>
        <p className="lilita-one border-b-2 border-gray-300">Next #{nextIndex} »</p>
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
