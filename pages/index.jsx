import { Link, Spacer, Page } from '@geist-ui/react'
import Contributors from 'lib/contributors'
import Title from 'lib/title'
import Projects from 'lib/projects'

const Home = () => {
  return (
    <Page size="mini" dotBackdrop>
      <Spacer y={2} />
      <Title />
      <Spacer />
      <p>Hello, everyone 👋</p>
      <p>
        <b>Geist</b> is an open source design system for building modern websites and applications.
      </p>
      <p>
        You can leave your suggestions, inquiries, or any different ideas on{' '}
        <Link color target="_blank" href="https://spectrum.chat/geist-ui?tab=chat">
          Spectrum
        </Link>
        , listening and improving is what we've been doing.
      </p>
      <Spacer y={3} />
      <Projects />
      <Spacer y={3} />
      <Contributors />
    </Page>
  )
}

export default Home
