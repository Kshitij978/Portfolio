interface Tool {
  name: string
  category: string
  subcategory: string
  link: string
}
export default function ToolsModal({ data }) {
  return Object.entries(data).map(([category, tools]) => (
    <div key={category}>
      <h2 className="pt-8 text-4xl md:pl-4">{category}</h2>
      <ul className="w-full md:w-4/5">
        {(tools as Tool[]).map(({ name, subcategory }) => (
          <li
            key={name}
            className="flex flex-col justify-between border-b border-gray-200 border-opacity-25 py-4 text-xl font-normal md:flex-row md:pl-4"
          >
            <div>{name}</div>

            <div className="opacity-70 ">{subcategory}</div>
          </li>
        ))}
      </ul>
    </div>
  ))
}
