import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/">
      <div className="absolute top-0 left-0 bg-white/90 my-3 p-3 rounded">Home</div>
    </Link>
  );
}
