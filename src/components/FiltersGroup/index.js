import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    getActiveCategoryId,
    getActiveRatingId,
    getSearchInput,
    activeCategoryId,
    getInitialState,
  } = props

  const renderSearchInput = () => {
    const onEnterSearchInput = event => {
      if (event.key === 'Enter') {
        getSearchInput(event.target.value)
      }
    }

    return (
      <div>
        <input type="search" onKeyDown={onEnterSearchInput} />
      </div>
    )
  }

  const renderCategoryOptions = () => (
    <ul className="category-container">
      <h1>Category</h1>
      {categoryOptions.map(eachCategory => {
        const {categoryId, name} = eachCategory

        const categoryButton =
          activeCategoryId === categoryId
            ? 'active-category-button'
            : 'category-button'

        const onClickCategory = () => {
          getActiveCategoryId(categoryId)
        }
        return (
          <li key={name} className="category">
            <button
              className={categoryButton}
              onClick={onClickCategory}
              type="button"
            >
              <p>{name}</p>
            </button>
          </li>
        )
      })}
    </ul>
  )

  const renderRatingOptions = () => (
    <ul className="ratings-container">
      <p>Ratings</p>
      {ratingsList.map(each => {
        const {ratingId, imageUrl} = each
        const onClickRating = () => {
          getActiveRatingId(ratingId)
        }
        return (
          <li onClick={onClickRating} key={imageUrl} className="rating-Item">
            <img
              className="rating-icons"
              src={imageUrl}
              alt={`rating ${ratingId}`}
            />
            <p>& up</p>
          </li>
        )
      })}
    </ul>
  )

  const onClickClearFilter = () => {
    getInitialState()
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryOptions()}
      {renderRatingOptions()}
      <button
        onClick={onClickClearFilter}
        className="clear-filter-button"
        type="button"
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
