type Props = {
  title: string
  onClick: () => void
}

export function PrimaryButton({ title, onClick }: Props) {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
