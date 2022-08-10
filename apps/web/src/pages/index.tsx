const MyToken = process.env.NEXT_PUBLIC_MY_TOKEN

export default function Home() {
  return (
    <p>
      {MyToken}
    </p>
  )
}
