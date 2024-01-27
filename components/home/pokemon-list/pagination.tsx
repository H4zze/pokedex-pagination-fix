import Link from "next/link";

export default function Pagination({ page }: { page: number }) {
  const hasPrevious = page > 1;
  const hasNext = page < 16;

  const firstPage = page - 2 > 0 ? (page > 14 ? 12 : page - 2) : 1;

  const pages = Array.from({ length: 5 }, (_, i) => ({ pageIndex: i + firstPage, isActive: i + firstPage === page }));

  return (
    <div className="flex flex-row gap-1">
      <PaginationButton index={page - 1} disabled={!hasPrevious}>
        «
      </PaginationButton>

      {pages.map(({ pageIndex, isActive }: { pageIndex: number; isActive: boolean }) => (
        <PaginationButton key={pageIndex} index={pageIndex} isActive={isActive}>
          {pageIndex}
        </PaginationButton>
      ))}

      <PaginationButton index={page + 1} disabled={!hasNext}>
        »
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
    <Link
      href={`/?page=${index}`}
      className={`w-8 h-8 border rounded flex items-center justify-center ${disabled ? "pointer-events-none" : ""} ${
        isActive ? "bg-gray-300" : "bg-white/90"
      }`}
      aria-label={`Go to page ${index}`}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}>
      {children}
    </Link>
  );
};
