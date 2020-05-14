import { Code, Link, Spacer } from '@zeit-ui/react'
import SectionName from './section-name'

const Projects = () => {
  return (
    <>
      <SectionName name="Projects" />
      <div style={{ paddingLeft: '10px' }}>
        <Link href="https://react.zeit-ui.co" target="_blank">
          <Code>zeit-ui/react</Code>&nbsp;- React UI library
        </Link>
        <Spacer y={0.5} />
        <Link href="https://vue.zeit-ui.co" target="_blank">
          <Code>zeit-ui/vue</Code>&nbsp;- Vue UI library
        </Link>
        <Spacer y={0.5} />
        <Link href="https://typography.zeit-ui.co" target="_blank">
          <Code>typography</Code>&nbsp;- Typography styles
        </Link>
        <Spacer y={0.5} />
        <Link href="https://zeit-style.now.sh" target="_blank">
          <Code>styles</Code>&nbsp;- CSS styles
        </Link>
      </div>
    </>
  )
}

export default Projects
