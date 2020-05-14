import { Link, Spacer, Page } from '@zeit-ui/react'
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
        We are an{' '}
        <Link color target="_blank" href="https://github.com/zeit-ui">
          open source
        </Link>{' '}
        organization and big fans of{' '}
        <Link target="_blank" href="https://vercel.com/design">
          <i>Vercel design style</i>
        </Link>
        . Here are some of our implementations of Vercel design, so you can use them well.
      </p>
      <p>
        You can leave your suggestions, inquiries, or any different ideas on{' '}
        <Link color target="_blank" href="https://spectrum.chat/zeit-ui?tab=chat">
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
