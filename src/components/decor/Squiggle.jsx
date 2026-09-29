export default function Squiggle({ color = '#DCFA57', className = '' }) {
  return (
    <svg
      viewBox="0 0 100 280"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 16
           C 82 16, 82 66, 22 66
           C -38 66, -38 116, 22 116
           C 82 116, 82 166, 22 166
           C -38 166, -38 216, 22 216
           C 82 216, 82 260, 22 260"
        stroke={color}
        strokeWidth="24"
        strokeLinecap="round"
      />
    </svg>
  )
}
