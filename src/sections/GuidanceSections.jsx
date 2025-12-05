import ListSection from '../components/ListSection'

const GuidanceSections = ({ sections }) => (
  <>
    {sections.map((section) => (
      <ListSection key={section.id} section={section} />
    ))}
  </>
)

export default GuidanceSections
