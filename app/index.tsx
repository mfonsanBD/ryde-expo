import { Redirect } from 'expo-router'

const Home = () => {
  return <Redirect href={'/(auth)/welcome' as any} />
}

export default Home
