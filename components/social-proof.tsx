const companies = [
  "https://res.cloudinary.com/dwsk5thfo/image/upload/v1742515316/wsnfs9w3kghv3gd7ohel.svg",
  "https://res.cloudinary.com/dwsk5thfo/image/upload/v1742516907/yce8dxgdw2rn2ms7o4ma.png",
  "https://res.cloudinary.com/dwsk5thfo/image/upload/v1742518376/kxcqwwmftxxku0ydwbbe.svg",
  "https://res.cloudinary.com/dwsk5thfo/image/upload/v1742517941/zsvng26vxhk5wxmsnfiv.svg",
  "https://res.cloudinary.com/dwsk5thfo/image/upload/v1742518582/fc2yjwmlnxew80ddwfsa.svg",
]

export function Companies() {
  return (
    <section id="companies">
      <div className="py-4 sm:py-6 md:py-8 lg:pb-10">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-xs sm:text-sm font-semibold text-gray-500 pb-2 sm:pb-3 md:pb-4">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-4 sm:mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-2 sm:gap-3 md:gap-4">
              {companies.map((logo, idx) => (
                <div key={idx} className="flex items-center justify-center w-full h-full px-2 sm:px-3 py-2">
                  <img
                    src={logo || "/placeholder.svg"}
                    className="h-auto w-full max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] object-contain dark:brightness-0 dark:invert"
                    alt={`Company logo ${idx + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-8 sm:w-12 md:w-16 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-8 sm:w-12 md:w-16 bg-gradient-to-l from-white dark:from-black"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

