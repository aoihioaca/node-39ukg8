import type { AttributifyAttributes } from 'unocss'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  namespace svelteHTML {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }

  interface NewsItem {
    title: string
    date: string
    id: string
    summary?: string
  }

  interface ArticleData {
    title: string
    summary: string
    html: string
  }
}

export {}
