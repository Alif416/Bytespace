interface CategoryCardProps {
  label: string
  image: string
}

export default function CategoryCard({ label, image }: CategoryCardProps) {
  return (
    <div className="flex w-[150px] flex-col items-center justify-center rounded-2xl border border-slate-200 px-4 py-6 sm:w-[170px] lg:w-auto lg:flex-1">
      <img src={image} alt={label} className="h-[97px] w-auto" />
    </div>
  )
}
