import { Spacer, Text } from '@zeit-ui/react'

const Title = () => {
  return (
    <Text h3 style={{ letterSpacing: '2px' }}>
      ZEIT
      <Text span type="secondary">
        ,
      </Text>
      <Spacer inline x={0.5} />
      VERCEL
      <Text span type="secondary">
        ,
      </Text>
      <Spacer inline x={0.5} />
      UI
    </Text>
  )
}

export default Title
