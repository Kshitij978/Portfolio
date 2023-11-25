import FavoriteModal from './FavoriteModal'
import PeopleModal from './PeopleModal'
import ToolsModal from './ToolsModal'

interface ModalProps {
  activeCategory: string
  categoryData: any[] | null
  onClose: () => void
}

export const ModalLayout: React.FC<ModalProps> = ({
  activeCategory,
  categoryData,
  onClose,
}) => {
  const activeCategorySplit = activeCategory.split(' ')

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 h-screen w-full overflow-auto">
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-black"></div>
      <div className="relative ">
        <div className="flex flex-col items-start px-16 text-white md:grid md:grid-cols-[1fr_3fr]">
          <h2 className="h-full text-4xl text-white md:border-r md:border-r-gray-200 md:border-opacity-20 md:text-6xl">
            <div className="mt-32 flex gap-4 md:flex-col">
              {activeCategorySplit.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </h2>

          <div className="mt-6 md:mt-28">
            {activeCategory === 'tools' && <ToolsModal data={categoryData} />}
            {activeCategory === 'people' && <PeopleModal data={categoryData} />}
            {activeCategory === 'favorite' && (
              <FavoriteModal data={categoryData} />
            )}
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
