import Link from 'next/link'
import React from 'react'

const BlogTab = ({ categories }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/blogs">Recent</Link>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/blogs/${category.attributes.slug}`}>
              {category.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BlogTab
