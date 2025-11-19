<template>
  <!-- Removed m-28 and adjusted padding for mobile -->
  <div class="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <!-- Adjusted text sizes for mobile -->
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-pretty text-white">
          Here are some of my favorite projects I have built recently. Feel free to check them out.
        </h2>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300">
          These projects showcase my commitment to creating meaningful software solutions. They're more than just code – they're answers to real problems.
        </p>
      </div>
      
      <!-- Adjusted grid and spacing for mobile -->
      <div class="mx-auto mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 border-t border-gray-700 pt-8 sm:pt-10 lg:pt-16">
        <article 
          v-for="post in posts" 
          :key="post.id" 
          class="flex flex-col items-start justify-between bg-gray-800/50 rounded-lg p-4 sm:p-6 hover:bg-gray-800/70 transition-colors"
        >
          <div class="flex flex-wrap items-center gap-2 sm:gap-x-4 text-xs">
            <time class="text-gray-400">{{ post.date }}</time>
            
            <!-- Router-link for category if it's internal -->
            <router-link 
              v-if="post.category.isInternal" 
              :to="post.category.href" 
              class="relative z-10 rounded-full bg-gray-700 px-2.5 sm:px-3 py-1 sm:py-1.5 font-medium text-gray-300 hover:bg-gray-600 transition-colors"
            >
              {{ post.category.title }}
            </router-link>
            
            <!-- External link for category -->
            <a 
              v-else
              :href="post.category.href" 
              target="_blank"
              rel="noopener noreferrer"
              class="relative z-10 rounded-full bg-gray-700 px-2.5 sm:px-3 py-1 sm:py-1.5 font-medium text-gray-300 hover:bg-gray-600 transition-colors"
            >
              {{ post.category.title }}
            </a>
          </div>
          
          <div class="group relative grow w-full">
            <h3 class="mt-3 text-base sm:text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
              <!-- Router-link for internal projects -->
              <router-link 
                v-if="post.isInternal" 
                :to="post.href"
                class="hover:underline"
              >
                {{ post.title }}
              </router-link>
              
              <!-- External link for projects -->
              <a 
                v-else
                :href="post.href"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline flex items-center gap-1"
              >
                {{ post.title }}
                <!-- External link icon -->
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </h3>
            <p class="mt-3 sm:mt-5 line-clamp-3 text-sm text-gray-400">
              {{ post.description }}
            </p>
          </div>
          
          <!-- Author section -->
          <div class="relative mt-6 sm:mt-8 flex items-center gap-x-3 sm:gap-x-4 w-full">
            <img 
              :src="post.author.imageUrl" 
              alt="" 
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 object-cover" 
            />
            <div class="text-sm">
              <p class="font-semibold text-white">
                <!-- Router-link for internal author profile -->
                <router-link 
                  v-if="post.author.isInternal" 
                  :to="post.author.href"
                  class="hover:text-gray-300"
                >
                  {{ post.author.name }}
                </router-link>
                
                <!-- External link for author -->
                <a 
                  v-else
                  :href="post.author.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-gray-300"
                >
                  {{ post.author.name }}
                </a>
              </p>
              <p class="text-gray-400 text-xs sm:text-sm">{{ post.author.role }}</p>
            </div>
          </div>
          
          <!-- Optional: Add action buttons -->
          <div class="flex gap-3 mt-4 w-full">
            <a 
              v-if="post.githubUrl"
              :href="post.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
            <a 
              v-if="post.liveUrl"
              :href="post.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
// Example data structure with internal/external links
const posts = [
  {
    id: 1,
    title: 'Personal Portfolio',
    href: 'https://ymaimbo.github.io/maimbo-portfolio/', // External
    isInternal: false, // Mark as external
    date: 'Octomber 10, 2025',
    description: 'An example of portfolio which can show case your skills',
    category: {
      title: 'Portfolio',
      href: '/projects/web-dev', // Internal route
      isInternal: true
    },
    author: {
      name: 'Yakoub Maimbo',
      href: '/about', // Internal route
      isInternal: true,
      role: 'Full Stack Developer',
      imageUrl: '/images/kenya.png',
    },
    githubUrl: 'https://github.com/ymaimbo/maimbo-portfolio',
    liveUrl: 'https://ymaimbo.github.io/maimbo-portfolio/'
  },
  {
    id: 2,
    title: 'Lulu Garage Management System',
    href: 'https://github.com/ymaimbo/Lulu-Workshop', // Internal route
    isInternal: true,
    date: 'Feb 4, 2024',
    description: 'Whether youre a DIY enthusiast, car lover, mechanic, or just someone who appreciates the smell of motor oil and the sound of a well-tuned engine',
    category: {
      title: 'Productivity',
      href: 'https://github.com/ymaimbo/Lulu-Workshop', // External
      isInternal: false
    },
    author: {
      name: 'Yakoub Maimbo',
      href: '/about',
      isInternal: true,
      role: 'Full Stack Developer',
      imageUrl: '/images/lulu.jpg',
    },
    githubUrl: 'https://github.com/ymaimbo/Lulu-Workshop',
    liveUrl: 'https://github.com/ymaimbo/Lulu-Workshop'
  },
  {
    id: 3,
    title: 'Basketball Database',
    href: 'https://github.com/ymaimbo/Basketball254', // External
    isInternal: false,
    date: 'Jan 5, 2024',
    description: 'Basketball site that shows basketball related information around in East Africa Teams and leagues',
    category: {
      title: 'Web Development',
      href: 'https://github.com/ymaimbo/Basketball254',
      isInternal: true
    },
    author: {
      name: 'Yakoub Maimbo',
      href: '/about',
      isInternal: true,
      role: 'Full Stack Developer',
      imageUrl: '/images/basketball.webp',
    },
    githubUrl: 'https://github.com/ymaimbo/Basketball254',
    liveUrl: 'https://github.com/ymaimbo/Basketball254'
  },
]
</script>