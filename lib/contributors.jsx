import { Grid, User } from '@zeit-ui/react'
import SectionName from './section-name'

const Contributors = () => {
  return (
    <>
      <SectionName name="Contributors" />
      <Grid.Container gap={2}>
        <Grid>
          <User src="https://avatars3.githubusercontent.com/u/11304944?s=96&v=4" name="witt">
            <User.Link href="https://github.com/unix">@unix</User.Link>
          </User>
        </Grid>
        <Grid>
          <User src="https://avatars2.githubusercontent.com/u/16443111?s=96&v=4" name="Ofek Ashery">
            <User.Link href="https://github.com/ofekashery">@ofekashery</User.Link>
          </User>
        </Grid>
        <Grid>
          <User src="https://avatars2.githubusercontent.com/u/17999142?s=96&v=4" name="Lzumikonata">
            <User.Link href="https://github.com/Lzumikonata">@Lzumikonata</User.Link>
          </User>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Contributors
