import { Row, Spacer } from '@zeit-ui/react'
import ChevronsRight from '@zeit-ui/react-icons/chevronsRight'

const SectionName = ({ name }) => {
  return (
    <>
      <Row align="middle" style={{ fontSize: '14px', textTransform: 'uppercase', height: '1rem' }}>
        <ChevronsRight size={18} />
        <Spacer inline x={0.1} />
        {name}
      </Row>
      <Spacer y={0.7} />
    </>
  )
}

export default SectionName
