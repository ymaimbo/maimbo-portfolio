<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 m-28 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Here are some of my favorite projects I have built recently. Feel free to check them out.</h2>
        <p class="mt-2 text-lg/8 text-gray-300">These projects showcase my commitment to creating meaningful software solutions. They're more than just code – they're answers to real problems. </p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time  class="text-gray-400">{{ post.date }}</time>
            <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800">{{ post.category.title }}</a>
          </div>
          <div class="group relative grow">
            <h3 class="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
              <a :href="post.href">
                <span class="absolute inset-0"></span>
                {{ post.title }}
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm/6 text-gray-400">{{ post.description }}</p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
            <img :src="post.author.imageUrl" alt="" class="size-10 rounded-full bg-gray-800" />
            <div class="text-sm/6">
              <p class="font-semibold text-white">
                <a :href="post.author.href">
                  <span class="absolute inset-0"></span>
                  {{ post.author.name }}
                </a>
              </p>
              <p class="text-gray-400">{{ post.author.role }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: 'Jamhuri Diaspora',
    
    description:
      ' A platform that bridges the gap between Kenyans living abroad and their homeland, facilitating seamless communication and cultural exchange.',
    date: 'April 4, 2020',
    category: { title: 'Web Application',  },
    author: {
      name: 'Jamhuri Diaspora Website',
      role: 'Front-end Development',
      href: 'https://jamhurimagazine.co.ke/',
      imageUrl:
        "/public/images/kenya.png",
    },
  },
  {
    id: 2,
    title: 'Lulu Garage Management System',
    
    description: 'A comprehensive platform designed to streamline garage operations, from inventory management to customer relations.',
    date: 'October, 2025',
    category: { title: 'Management',  },
    author: {
      name: 'Github Repository',
      role: 'Full Stack Development',
      href: 'https://github.com/ymaimbo/Lulu-Workshop',
      imageUrl:
        "/public/images/lulu.jpg",
    },
  },
  {
    id: 3,
    title: 'Basketball Database',
    
    description:
      'Basketball site that shows basketball related information around in East Africa Teams and leagues',
    date: 'August 23, 2024',
    
    category: { title: 'Sports',  },
    author: {
      name: 'Github Repository',
      role: 'Full Stack Development',
      href: 'https://github.com/ymaimbo/Basketball254',
      imageUrl:
        "/public/images/basketball.webp",
    },
  },
]
</script>