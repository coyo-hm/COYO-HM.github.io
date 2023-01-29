import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const TableOfContents = () => {
  const onClickUp = () => {
    document.getElementById('contentWrapper')?.scrollTo(0, 0)
  }
  const onClickDownButton = () => {
    const contentWrapperRef = document.getElementById('contentWrapper')
    if (contentWrapperRef) {
      contentWrapperRef.scrollTo(0, contentWrapperRef.scrollHeight)
    }
  }

  return (
    <div className={``}>
      <button onClick={onClickUp}>
        <FaChevronUp />
      </button>
      <button onClick={onClickDownButton}>
        <FaChevronDown />
      </button>
    </div>
  )
}

export default TableOfContents
