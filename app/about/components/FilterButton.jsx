export default function FilterButton({ children, active, onClick }) {
  return (
    <button
      type="button"
      className={`overflow-hidden text-center text-sm outline-0 rounded-full cursor-pointer w-32 py-2 hover:text-white uppercase md:font-medium border-gray-600 border hover:bg-gray-600 hover:transition-all ${
        active ? 'text-white' : ''
      } ${active ? 'bg-gray-600' : ''}`}
      onClick={onClick}>
      {children}
    </button>
  )
}
