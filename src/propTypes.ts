import PropTypes from 'prop-types'

// export * as PropTypes from 'prop-types'

const Location = PropTypes.shape({
  lc: PropTypes.string.isRequired
})

const Locations = PropTypes.arrayOf(Location.isRequired)

const Camp = PropTypes.oneOf([0, 1, 2, 3])
const Camps = PropTypes.arrayOf(Camp.isRequired)

export const TwxPropTypes = {
  Locations,
  Location,
  Camps,
  Camp
}

export {
  PropTypes
}
