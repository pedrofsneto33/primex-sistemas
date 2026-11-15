import HomeClient from "@/components/home/HomeClient"
import { getAllPosts } from "@/lib/blog"

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3)
  return <HomeClient latestPosts={latestPosts} />
}
