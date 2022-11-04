interface HomeProps {
  count: number;
}


export default function Home(props: HomeProps) {
  const {count} = props;
  return (
    <h1>Contagem: {count} </h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count,
    }
  }
}
