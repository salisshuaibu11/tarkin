const posts = [
  {
    title: 'Food insecurity in pastoral communities of Borno',
    description:
      'Food insecurity is a public health concern especially in sub-Sahara Africa',
    imageUrl:
      '/food.png',
  },
  {
    title: 'Does linking women farmers to markets improve food security?',
    description:
      'Community marketing was devised to link women smallholders...',
    imageUrl:
      '/farmers.png',
  },
  {
    title: '‘Hunger in early life’: exploring the prevalence and correlates of child food..',
    description:
      'Although food is a basic human right, food insecurity remains...',
    imageUrl:
      '/farmer.png',
  }
]

export default function Example() {
  return (
    <div className="relative bg-gray-100 px-4 pt-16 pb-20 sm:px-2 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl">BLOG</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg py-4 px-8 bg-white">
              <div className="flex-shrink-0">
                <img className="h-48 w-full rounded-lg object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white">
                <div className="flex-1">
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-indigo-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-800">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <a className="text-green-800">Read more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
