<template>
    <div>
         <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
           <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Yakoub Maimbo</span>
            <img class="object-cover rounded-full bg-zinc-100 w-18 h-18" src="/images/maimbo.jpeg" alt="" />
          </router-link>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
           <router-link 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.href" 
            class="text-3xl font-semibold text-white"
          >
            {{ item.name }}
          </router-link>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <router-link to="/" class="text-sm/6 font-semibold text-white"> 
            <span aria-hidden="true">&rarr;</span>
          </router-link>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"></div>
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div class="flex items-center justify-between">
            <router-link to="/" class="-m-1.5 p-1.5">
              <img class="object-cover rounded-full bg-zinc-100 w-18 h-18" src="/images/maimbo.jpeg" alt="" />
             </router-link>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-200" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-white/10">
              <div class="space-y-2 py-6">
                 <!-- Add mobile navigation links -->
                <router-link 
                  v-for="item in navigation" 
                  :key="item.name"
                  :to="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  @click="mobileMenuOpen = false"
                >
                  {{ item.name }}
                </router-link>
              </div>
              <div class="py-6">
                <router-link to="/" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5">
                </router-link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  //{ name: 'Articles', href: '/articles' },
 // { name: 'Now', href: '/now' },
]

const mobileMenuOpen = ref(false)
</script>