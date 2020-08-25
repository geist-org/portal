import { Code, Link, Spacer } from '@geist-ui/react'
import SectionName from './section-name'

const Projects = () => {
  return (
    <>
      <SectionName name="Projects" />
      <div style={{ paddingLeft: '10px' }}>
        <Link href="https://react.geist-ui.dev" target="_blank">
          <Code>Geist React</Code>&nbsp;- React UI library
        </Link>
        <Spacer y={0.5} />
        <Link href="https://vue.geist-ui.dev" target="_blank">
          <Code>Geist Vue</Code>&nbsp;- Vue UI library (2.0)
        </Link>
        <Spacer y={0.5} />
        <Link href="https://typography.geist-ui.dev" target="_blank">
          <Code>Geist Typography</Code>&nbsp;- Easy to use text layout style
        </Link>
        <Spacer y={0.5} />
        <Link href="https://style.geist-ui.dev" target="_blank">
          <Code>Geist Style</Code>&nbsp;- Additional CSS style implementation
        </Link>
      </div>
    </>
  )
}

export default Projects
