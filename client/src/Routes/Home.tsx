import Header from '../components/Header'
const Home = () => {
  return (
    <main className="max-h-screen h-screen bg-background flex flex-col">
      <Header/>
      <div className=' flex flex-1 justify-center gap-3 items-center'>
        <img src="./../../public/undraw_chatting_re_j55r.svg" className="w-[30rem] h-auto" alt="" />
        <div className='w-[50ch]'>
          <h1 className='text-2xl text-accent'>Connect with the people you know</h1>
          <h2 className='text-xl text-primary'>Make new friends and hang out with them!!</h2>
          <p className='text-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis minima consequatur nihil ipsum, repellendus repudiandae dolorem ducimus! Nobis magni quod, aliquam minima debitis quidem? Neque numquam quisquam perferendis vel ut!</p>
        </div>
      </div>
    </main>
  )
}

export default Home