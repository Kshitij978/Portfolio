// import BlogTab from 'components/Blog/BlogTab'
// import { getAllCategories, getBlogsByCategory } from 'pages/api/hello'

// export default function BlogByCategory({ html, blogs, categories }) {
//   return (
//     <section>
//       <h1>Blogs</h1>
//       <BlogTab categories={categories} />
//       {blogs.map((blog) => (
//         <article key={blog.id}>
//           <h1>{blog.attributes.title}</h1>
//           <div dangerouslySetInnerHTML={{ __html: html }} />
//         </article>
//       ))}
//     </section>
//   )
// }

// export async function getServerSideProps({ query }) {
//   const { data: blogsData, contentHtml } = await getBlogsByCategory(
//     String(query.category)
//   )
//   const { data: categoryData } = await getAllCategories()
//   return {
//     props: {
//       html: contentHtml,
//       blogs: blogsData.data,
//       categories: categoryData.data,
//     },
//   }
// }
