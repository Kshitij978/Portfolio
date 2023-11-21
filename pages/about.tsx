import PageTransitionLayout from 'components/PageTransitionLayout'
import Lottie from 'lottie-react'
import aboutPageIllustration from '../lottie/about.json'
import { motion } from 'framer-motion'
import HorizontalMarquee from 'components/Marquee'
import { client } from '../lib/client'
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import Split from 'components/SplitText'
import { useState } from 'react'
import Head from 'next/head'

interface ListItem {
  text: string
  data: any[]
}

interface AboutProps {
  data: any
  favoriteData: any[]
  peopleData: any[]
  toolsData: any[]
}

interface ModalProps {
  activeCategory: string
  categoryData: any[] | null
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({
  activeCategory,
  categoryData,
  onClose,
}) => {
  const activeCategorySplit = activeCategory.split(' ')

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 w-full h-screen overflow-auto">
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black"></div>
      <div className="relative ">
        <div className="flex flex-col items-start px-16 text-white md:grid md:grid-cols-[1fr_3fr]">
          <h2 className="h-full text-4xl text-white md:border-r md:border-r-gray-200 md:border-opacity-20 md:text-6xl">
            <div className="flex gap-4 mt-32 md:flex-col">
              {activeCategorySplit.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </h2>

          <div className="mt-6 md:mt-28">
            {categoryData.map((category) => (
              <div
                key={category._key}
                className="flex flex-col gap-4 py-6 border-b border-gray-200 border-opacity-25 md:grid md:grid-cols-2 md:px-4"
              >
                <div className="text-lg font-light">{category.category}</div>
                <ul>
                  {category.name.map((item: { name: string; _key: string }) => (
                    <li className="py-2 text-xl font-normal" key={item._key}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="fixed cursor-pointer right-16 top-16 hover:border-b"
        onClick={onClose}
      >
        <i className="text-lg ri-close-line"></i> Close
      </div>
    </div>
  )
}

export default function About({ data, favoriteData, peopleData, toolsData }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleListItemClick = (category: string) => {
    setSelectedCategory(category)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const getCategoryData = (category: string): any[] | null => {
    switch (category) {
      case 'People I follow':
        return peopleData
      case 'Tools I use':
        return toolsData
      case 'Favorite List':
        return favoriteData
      default:
        return null
    }
  }
  const marqueeText = [
    'ReactJS',
    '-',
    'Figma',
    '-',
    'NextJS',
    '-',
    'Framer',
    '-',
    'Tailwind',
    '-',
    'ReactJS',
    '-',
    'Figma',
    '-',
    'NextJS',
    '-',
    'Framer',
    '-',
  ]

  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.8, ease: [0.27, 0.85, 0.17, 0.97] },
    },
    show: {
      opacity: 1,
      x: ['100%', '0%'],
      transition: { duration: 0.8, ease: [0.27, 0.85, 0.17, 0.97] },
    },
  }

  const components: Partial<PortableTextReactComponents> = {
    block: {
      h2: ({ children }) => {
        const childArray = Array.isArray(children) ? children : [children] // Convert children to an array if it's not already
        return (
          <h2 className="pb-10 text-xl font-normal leading-snug split-lines md:text-4xl">
            {childArray.map((child: string, index: number) => (
              <Split key={index}>{child}</Split>
            ))}
          </h2>
        )
      },
      normal: ({ children }) => {
        const childArray = Array.isArray(children) ? children : [children] // Convert children to an array if it's not already

        return (
          <p className="w-5/6 pb-4 font-thin leading-relaxed tracking-normal split-lines md:max-w-3xl md:text-xl">
            {childArray.map((child: string, index: number) => (
              <Split key={index}>{child}</Split>
            ))}
          </p>
        )
      },
    },

    hardBreak: false,
  }
  const listItems = [
    { text: 'People I follow', data: peopleData },
    { text: 'Tools I use', data: toolsData },
    { text: 'Favorite List', data: favoriteData },
  ]

  const headerText = ['Minimalist', '-', 'User-centric', '-', 'UX Enthusiast']

  return (
    <>
      <Head>
        <title>About Me | Kshitij Srivastava</title>
      </Head>
      <PageTransitionLayout>
        <main className="w-4/5 mx-auto mt-28 md:mt-10">
          {isModalOpen && (
            <Modal
              activeCategory={selectedCategory}
              categoryData={getCategoryData(selectedCategory)}
              onClose={() => {
                setIsModalOpen(false)
                document.body.style.overflow = 'auto'
              }}
            />
          )}
          <div className="relative flex flex-col items-center justify-center w-full">
            <div className=" top-8 h-[2px] w-full bg-white"></div>
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className="flex items-center justify-between w-full py-4 text-base font-bold md:py-20 md:text-6xl"
            >
              {headerText.map((text, index) => (
                <motion.span
                  key={index}
                  variants={childVariants}
                  transition={{ duration: 0.1 }}
                  className="opacity-0"
                >
                  {text}
                </motion.span>
              ))}
            </motion.h1>
            <div className=" bottom-8 h-[2px] w-full bg-white"></div>
          </div>
          <div className="flex justify-center w-full">
            <Lottie
              animationData={aboutPageIllustration}
              style={{ width: 800, height: 'auto' }}
            />
          </div>
          <section className="relative items-center gap-10 pb-20 pt-12 md:grid md:grid-cols-[0.1fr_10fr]">
            <div className="pb-12 md:w-28 md:pb-0">
              <h1 className="font-bold">WHO I AM</h1>
            </div>
            <div className="w-full pl-6 border-l md:pl-14">
              <PortableText value={data.description} components={components} />
            </div>
          </section>

          <section className="py-10 mb-24 text-4xl border-white opacity-40 md:text-6xl">
            <HorizontalMarquee marqueeTexts={marqueeText} />
          </section>

          <section className="flex flex-col items-center w-full gap-20 ">
            <p className="relative flex justify-center w-full pt-4 mt-10 md:mt-20 ">
              <i className="absolute p-6 text-6xl text-white ri-double-quotes-l left-50 -top-20 -z-50 opacity-80"></i>
              <q className="text-2xl italic leading-normal tracking-wide text-center split-lines before:content-none after:content-none md:w-1/2 md:text-3xl">
                <Split>
                  Happiness is a constant work in progress because solving
                  problems is a constant work in progress
                </Split>
              </q>
            </p>
            <span className="pb-20 -mt-10">- Mark Manson</span>

            <motion.ul
              className="grid grid-cols-3 divide-x w-fit opacity-90 md:flex md:w-full md:items-center md:justify-center"
              variants={containerVariants}
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              initial="hidden"
            >
              {listItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={childVariants}
                  className="flex items-center justify-center p-4 text-base opacity-0 md:text-2xl"
                >
                  <a
                    className="md:p-6"
                    onClick={() => handleListItemClick(item.text)}
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </section>
        </main>
      </PageTransitionLayout>
    </>
  )
}

/**
 * Retrieves static props for the component.
 *
 * @return {Promise<{ props: { data: any; } }>} The static props for the component.
 */
export async function getStaticProps() {
  const query = `*[_type == 'about'][0]`
  const favoriteQuery = `*[_type == 'favorites']`
  const peopleQuery = `*[_type == 'tools']`
  const toolsQuery = `*[_type == 'people']`
  const data = await client.fetch(query)
  const favoriteData = await client.fetch(favoriteQuery)
  const peopleData = await client.fetch(peopleQuery)
  const toolsData = await client.fetch(toolsQuery)
  return {
    props: {
      data,
      favoriteData,
      peopleData,
      toolsData,
    },
  }
}
