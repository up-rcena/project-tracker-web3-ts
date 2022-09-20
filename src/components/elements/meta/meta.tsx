import Head  from 'next/head'

interface IMeta {
  title: string,
  description: string
}

const Meta = ({title, description}: IMeta) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default Meta