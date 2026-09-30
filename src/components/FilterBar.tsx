import { LevelIcon } from './icons/CardIcons'
import { CategoryGridIcon, FilterIcon, SortIcon } from './icons/FilterBarIcons'

const FILTERS = [
  { Icon: FilterIcon, label: 'Filter' },
  { Icon: LevelIcon, label: 'Level' },
  { Icon: CategoryGridIcon, label: 'Category' },
]

export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-3">
        {FILTERS.map(({ Icon, label }) => (
          <button
            key={label}
            type="button"
            className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300"
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300"
      >
        <SortIcon className="h-4 w-4" />
        Most relevant
      </button>
    </div>
  )
}
