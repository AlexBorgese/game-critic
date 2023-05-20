import Head from 'next/head'
import styled from 'styled-components'

interface props {
  children: string | JSX.Element | JSX.Element[]
  seoDescription: string
  seoTitle: string
}

const Layout = ({ children, seoDescription, seoTitle }: props) => {
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 shrink-to-fit=no,maximum-scale=1.0, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>{children}</Main>
    </>
  )
}

export default Layout

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #151515;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 0 16px;
    width: auto;
  }
`
