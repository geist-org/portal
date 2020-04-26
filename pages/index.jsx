import { Text, useTheme, Link, Spacer, Row, Col, Code, Avatar, Dot } from '@zeit-ui/react';

const Home = () => {
  const theme = useTheme();

  return (
    <main>
      <Spacer y={3} />
      <Text h2>Vercel UI</Text>
      <p>
        Hello 👋
        <br />
        We are an{' '}
        <Link color pure href="https://github.com/zeit-ui">
          open source
        </Link>{' '}
        UI Organization and big fans of{' '}
        <Link color href="https://vercel.com/design">
          Vercel Design
        </Link>{' '}
        style.
        <br />
        Here are some of our implementation of Vercel Design, so you can use them well.
      </p>

      <Link pure href="https://react.zeit-ui.co" target="_blank">
        <Code>zeit-ui/react</Code>&nbsp;- React UI library
      </Link>
      <Spacer y={0.5} />
      <Link pure href="https://vue.zeit-ui.co" target="_blank">
        <Code>zeit-ui/vue</Code>&nbsp;- Vue UI library
      </Link>
      <Spacer y={0.5} />
      <Link pure href="https://typography.zeit-ui.co" target="_blank">
        <Code>typography</Code>&nbsp;- Typography styles
      </Link>
      <Spacer y={0.5} />
      <Link pure href="https://zeit-style.now.sh" target="_blank">
        <Code>styles</Code>&nbsp;- CSS styles
      </Link>

      <Spacer y={3} />
      <Dot type="success">
        <Text b type="success">
          Contributors
        </Text>
      </Dot>
      <Spacer y={0.7} />

      <Row>
        <Col offset=".5">
          <Avatar.Group>
            <Link pure href="https://github.com/unix" target="_blank">
              <Avatar stacked draggable="false" src="https://avatars3.githubusercontent.com/u/11304944?s=96&v=4" />
            </Link>
            <Link pure href="https://github.com/ofekashery" target="_blank">
              <Avatar stacked draggable="false" src="https://avatars2.githubusercontent.com/u/16443111?s=96&v=4" />
            </Link>
            <Link pure href="https://github.com/l1shen" target="_blank">
              <Avatar stacked draggable="false" src="https://avatars2.githubusercontent.com/u/8299540?s=96&v=4" />
            </Link>
            <Link pure href="https://github.com/Lzumikonata" target="_blank">
              <Avatar stacked draggable="false" src="https://avatars2.githubusercontent.com/u/17999142?s=96&v=4" />
            </Link>
          </Avatar.Group>
        </Col>
      </Row>

      <style global jsx>{`
        h1 {
          font-size: 2em !important;
          font-weight: 700;
        }

        .tag {
          color: ${theme.palette.accents_5};
        }

        .punctuation {
          color: ${theme.palette.accents_5};
        }

        .attr-name {
          color: ${theme.palette.accents_6};
        }

        .attr-value {
          color: ${theme.palette.accents_4};
        }

        .language-javascript {
          color: ${theme.palette.accents_4};
        }

        span[class*='class-name'] {
          color: ${theme.palette.purple};
        }

        span.token.string {
          color: ${theme.palette.accents_5};
        }

        span.keyword {
          color: ${theme.palette.success};
        }

        span.plain-text {
          color: ${theme.palette.accents_3};
        }
      `}</style>
    </main>
  );
};

export default Home;
