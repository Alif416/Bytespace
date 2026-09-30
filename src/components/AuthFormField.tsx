interface AuthFormFieldProps {
  label: string
  type: string
  placeholder: string
}

export default function AuthFormField({ label, type, placeholder }: AuthFormFieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-900">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
      />
    </label>
  )
}
