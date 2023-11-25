interface Tool {
  name: string
  category: string
  subcategory: string
  link: string
}
export default function ToolsModal({ data }) {
  return Object.entries(data).map(([category, tools]) => (
    <div key={category}>
      <h2>{category}</h2>
      <ul>
        {(tools as Tool[]).map(({ name, subcategory }) => (
          <li
            key={name}
            className="flex border-b border-gray-200 border-opacity-25 py-2 text-xl font-normal"
          >
            {name}

            <div>{subcategory}</div>
          </li>
        ))}
      </ul>
    </div>
  ))
}
