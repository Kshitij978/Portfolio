interface Tool {
  name: string
  category: string
  subcategory: string
  link: string
}
export default function ToolsModal({ data }) {
  return Object.entries(data).map(([category, tools]) => (
    <div key={category}>
      <h2 className="pt-8 text-3xl md:pl-4 md:text-4xl">{category}</h2>
      <ul className="w-full md:w-4/5">
        {(tools as Tool[]).map(({ name, subcategory }) => (
          <li
            key={name}
            className="flex flex-col justify-between border-b border-gray-200 border-opacity-25 py-4 text-xl font-normal md:flex-row md:pl-4"
          >
            <div className="pt-4">{name}</div>

            <div className="pt-4 opacity-70">{subcategory}</div>
          </li>
        ))}
      </ul>
    </div>
  ))
}
