import PageTransitionLayout from 'components/PageTransitionLayout'
import Lottie from 'lottie-react'
import aboutPageIllustration from '../lottie/about.json'
import { motion } from 'framer-motion'
import HorizontalMarquee from 'components/Marquee'
import { client } from '../lib/client'
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import Split from 'components/SplitText'
import { useState } from 'react'

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
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 h-screen w-full overflow-auto">
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-black"></div>
      <div className="relative ">
        <div className="grid grid-cols-[1fr_3fr] items-start  px-16 text-white">
          <h2 className="h-full border-r border-r-gray-200 border-opacity-25 text-6xl text-white">
            <div className="mt-32 flex flex-col gap-4">
              <div>Favorite</div>
              <div>List</div>
            </div>
          </h2>

          <div className="mt-28">
            {categoryData.map((category) => (
              <div
                key={category._key}
                className="grid w-4/5 grid-cols-2 border-b border-gray-200 border-opacity-25 px-4 py-6"
              >
                <div className="text-lg font-light">{category.category}</div>
                <ul>
                  {category.name.map((item: { name: string; _key: string }) => (
                    <li className="text-xl font-normal" key={item._key}>
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
        className="fixed right-16 top-16 cursor-pointer hover:border-b"
        onClick={onClose}
      >
        <i className="ri-close-line text-lg"></i> Close
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
      case 'My Favorite List':
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
          <h2 className="split-lines pb-10 text-xl font-normal leading-snug md:text-4xl">
            {childArray.map((child: string, index: number) => (
              <Split key={index}>{child}</Split>
            ))}
          </h2>
        )
      },
      normal: ({ children }) => {
        const childArray = Array.isArray(children) ? children : [children] // Convert children to an array if it's not already

        return (
          <p className="split-lines w-5/6 pb-4 font-thin leading-relaxed tracking-normal md:max-w-3xl md:text-xl">
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
    { text: 'My Favorite List', data: favoriteData },
  ]

  const headerText = ['Minimalist', '-', 'User-centric', '-', 'UX Enthusiast']

  return (
    <PageTransitionLayout>
      <main className="mx-auto mt-28 w-4/5 md:mt-10">
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
        <div className="relative flex w-full flex-col items-center justify-center">
          <div className=" top-8 h-[2px] w-full bg-white"></div>
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="flex w-full items-center justify-between py-4 text-base font-bold md:py-20 md:text-6xl"
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
        <div className="flex w-full justify-center">
          <Lottie
            animationData={aboutPageIllustration}
            style={{ width: 800, height: 'auto' }}
          />
        </div>
        <section className="relative items-center gap-10 pb-20 pt-12 md:grid md:grid-cols-[0.1fr_10fr]">
          <div className="pb-12 md:w-28 md:pb-0">
            <h1 className="font-bold">WHO I AM</h1>
          </div>
          <div className="w-full border-l pl-6 md:pl-14">
            <PortableText value={data.description} components={components} />
          </div>
        </section>

        <section className="mb-24 border-white py-10 text-4xl opacity-40 md:text-6xl">
          <HorizontalMarquee marqueeTexts={marqueeText} />
        </section>

        <section className="flex w-full flex-col items-center gap-20 ">
          <p className="relative mt-10 flex w-full justify-center pt-4 md:mt-20 ">
            <i className="ri-double-quotes-l left-50 absolute -top-20 -z-50 p-6 text-6xl text-white opacity-80"></i>
            <q className="split-lines text-center text-2xl italic leading-normal tracking-wide before:content-none after:content-none md:w-1/2 md:text-3xl">
              <Split>
                Happiness is a constant work in progress because solving
                problems is a constant work in progress
              </Split>
            </q>
          </p>
          <span className="-mt-10 pb-20">- Mark Manson</span>

          <motion.ul
            className="grid w-fit grid-cols-3 divide-x opacity-90 md:flex md:w-full md:items-center md:justify-center"
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
  console.log(favoriteData[0].name)
  return {
    props: {
      data,
      favoriteData,
      peopleData,
      toolsData,
    },
  }
}