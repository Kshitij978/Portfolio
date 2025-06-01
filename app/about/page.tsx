import { client } from '../../lib/client'
import About from 'components/About/About'

interface Tool {
  name: string
  category: string
  subcategory: string
  link: string
}

async function getData() {
  const query = `*[_type == 'about'][0]`
  const favoriteQuery = `*[_type == 'favorites']`
  const peopleQuery = `*[_type == 'people']`
  const toolsQuery = `*[_type == 'tools']`
  const data = await client.fetch(query)
  const favoriteData = await client.fetch(favoriteQuery)
  const peopleData = await client.fetch(peopleQuery)
  const toolsData = await client.fetch(toolsQuery)

  // Group the tools by category
  const toolsByCategory: { [category: string]: Tool[] } = toolsData.reduce(
    (acc: { [category: string]: Tool[] }, tool: Tool) => {
      if (!acc[tool.category]) {
        acc[tool.category] = []
      }
      acc[tool.category].push(tool)
      return acc
    },
    {}
  )

  return {
    data,
    favoriteData,
    peopleData,
    toolsByCategory,
  }
}

export default async function AboutPage() {
  const { data, favoriteData, peopleData, toolsByCategory } = await getData()
  return (
    <About
      data={data}
      favoriteData={favoriteData}
      peopleData={peopleData}
      toolsByCategory={toolsByCategory}
    />
  )
}
