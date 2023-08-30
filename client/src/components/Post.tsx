import {trpc} from '../trpc'
const Post = ()  => {
    const notes = trpc.post.get.useQuery()
  return (
    <div>{JSON.stringify(notes)}</div>
  )
}

export default Post

