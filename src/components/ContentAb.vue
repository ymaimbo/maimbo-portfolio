<template>
  <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg class="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-800/50">
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Software Engineer, Designer & Digital Entrepreneur</h1>
            <p class="mt-6 text-xl/8 text-gray-300">I'm self-taught software engineer with a strong foundation in modern technologies. Through dedicated practice and continuous learning, I've developed extensive expertise in PHP, Laravel,  VueJs, InertiaJs, and TailwindCSS, always staying current with the latest trends and best practices.</p>
          </div>
        </div>
      </div>
      <div class="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img class="w-3xl max-w-none rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 sm:w-160" src="/images/maimbo.jpeg" alt="" />
      </div>
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
            <p>Currently, I'm leading a software studio specializing in designing and developing business applications. Our focus is on creating practical, efficient solutions using modern tech stacks that prioritize both performance and user experience.</p>
            <ul role="list" class="mt-8 space-y-8 text-gray-400">
              <li class="flex gap-x-3">
                <CloudArrowUpIcon class="mt-1 size-5 flex-none text-indigo-400" aria-hidden="true" />
                <span><strong class="font-semibold text-white">Other Activities, </strong>  When I'm not coding, you'll often find me on the basketball court, where I apply the same principles of continuous improvement and teamwork that I bring to my development projects.</span>
              </li>
              <li class="flex gap-x-3">
                <LockClosedIcon class="mt-1 size-5 flex-none text-indigo-400" aria-hidden="true" />
                <span><strong class="font-semibold text-white"></strong> I remain passionate about building intuitive, scalable, and high-performing web applications, constantly working to enhance both my technical capabilities and communication skills to deliver better solutions for clients and users alike.</span>
              </li>
              
            </ul>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'
</script>