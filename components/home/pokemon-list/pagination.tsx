import Link from "next/link";

export default function Pagination({
  page,
  limit = 10,
}: {
  page: number;
  limit: number;
}) {
  const totalPages = Math.ceil(151 / limit);
  const hasPrevious = page > 1;
  const hasNext = page < totalPages;

  const firstPage =
    page - 2 > 0 ? (page > totalPages - 2 ? totalPages - 4 || 1 : page - 2) : 1;

  const pages = Array.from({ length: Math.min(totalPages, 5) }, (_, i) => ({
    pageIndex: i + firstPage,
    isActive: i + firstPage === page,
  }));

  return (
    <div className="flex flex-row gap-1">
      <PaginationButton index={page - 1} limit={limit} disabled={!hasPrevious}>
        «
      </PaginationButton>

      {pages.map(
        ({ pageIndex, isActive }: { pageIndex: number; isActive: boolean }) => (
          <PaginationButton
            key={pageIndex}
            index={pageIndex}
            limit={limit}
            isActive={isActive}
          >
            {pageIndex}
          </PaginationButton>
        )
      )}

      <PaginationButton index={page + 1} limit={limit} disabled={!hasNext}>
        »
      </PaginationButton>
    </div>
  );
}

const PaginationButton = ({
  index,
  limit,
  children,
  disabled = false,
  isActive = false,
}: {
  index: number;
  limit: number;
  children: React.ReactNode;
  disabled?: boolean;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={`/?page=${index}&limit=${limit}`}
      className={`w-8 h-8 border rounded flex items-center justify-center ${
        disabled ? "pointer-events-none" : ""
      } ${isActive ? "bg-gray-300" : "bg-white/90"}`}
      aria-label={`Go to page ${index}`}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
    >
      {children}
    </Link>
  );
};
