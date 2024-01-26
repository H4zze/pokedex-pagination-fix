import { pages } from "next/dist/build/templates/app-page";
import Link from "next/link";

export default function Pagination({ page }: { page: any }) {
  const hasPrevious = page > 1;
  const hasNext = page < 16;

  const startPage = page - 2 > 0 ? page - 2 : 1;

  const pages = Array.from({ length: 5 }, (_, i) => ({ pageIndex: i + startPage, isActive: i + startPage === page }));

  return (
    <div className="flex flex-row gap-1">
      <PaginationButton index={page - 1} disabled={!hasPrevious}>
        Prev
      </PaginationButton>

      {pages.map(({ pageIndex, isActive }: { pageIndex: number; isActive: boolean }) => (
        <PaginationButton key={pageIndex} index={pageIndex} isActive={isActive}>
          {pageIndex}
        </PaginationButton>
      ))}

      <PaginationButton index={page + 1} disabled={!hasNext}>
        Next
      </PaginationButton>
    </div>
  );
}

const PaginationButton = ({
  index,
  children,
  disabled = false,
  isActive = false,
}: {
  index: number;
  children: React.ReactNode;
  disabled?: boolean;
  isActive?: boolean;
}) => {
  return (
    <Link href={`/?page=${index}`}>
      <button
        className={`w-8 h-8 border bg-white/90 rounded flex items-center justify-center ${
          disabled ? "pointer-events-none" : ""
        } ${isActive ? "bg-gray-300" : ""}`}
        aria-label={`Go to page ${index}`}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}>
        {children}
      </button>
    </Link>
  );
};
