export default function FavoriteModal({ data }) {
  return data.map((item) => (
    <div
      key={item._key}
      className="flex flex-col gap-4 border-b border-gray-200 border-opacity-25 py-6 md:grid md:grid-cols-2 md:px-4"
    >
      <div className="text-lg font-light">{item.category}</div>
      <ul>
        {item.name.map((item: { name: string; _key: string }) => (
          <li className="py-2 text-xl font-normal" key={item._key}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  ))
}
