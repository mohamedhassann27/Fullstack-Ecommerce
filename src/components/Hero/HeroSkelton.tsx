function HeroSkeleton() {
  return (
    <div className="flex max-md:flex-col gap-5 py-0 mx-0 px-0">

      {/* Sidebar Skeleton */}
      <div className="md:py-12 py-6 border-r max-md:border-b max-md:hidden">
        <ul className="w-60 space-y-5">
          {Array.from({ length: 9 }).map((_, i) => (
            <li key={i} className="h-4 bg-gray-300 animate-pulse rounded w-3/4"></li>
          ))}
        </ul>
      </div>

      {/* Hero Slider Skeleton */}
      <div className="py-12 max-md:py-5 max-md:mt-6 relative h-70 w-[80%] max-xl:w-full">

        <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg relative">

          {/* Fake CTA */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2">
            <div className="h-4 w-20 bg-gray-400 rounded animate-pulse"></div>
            <div className="h-4 w-4 bg-gray-400 rounded animate-pulse"></div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default HeroSkeleton