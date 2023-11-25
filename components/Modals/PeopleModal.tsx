export default function PeopleModal({ data }) {
  return data.map((item) => (
    <a
      href={item?.youtube?.channel_link || item.link}
      target="_blank"
      key={item._key}
      className="flex flex-col gap-4 border-b border-gray-200 border-opacity-25 py-6 md:grid md:grid-cols-3 md:px-4"
    >
      <div className="text-lg font-light">{item.name}</div>

      <div className="text-lg font-light ">
        <span className="border-b border-dotted">
          {item?.youtube?.channel_name}
        </span>
      </div>

      <div className="text-lg font-light opacity-70">{item.category}</div>
    </a>
  ))
}
