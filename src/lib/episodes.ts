import { parse as parseFeed } from 'rss-to-json'
import { array, number, object, parse, string } from 'valibot'
import { episodes as items } from '../data/episodes'

export interface Episode {
  id: number
  title: string
  published: Date
  description: string
  content: string
  audio: {
    src: string
    type: string
  }
}

export async function getAllEpisodes() {
  //let FeedSchema = object({
  //  items: array(
  //    object({
  //      id: number(),
  //      title: string(),
  //      published: number(),
  //      description: string(),
  //      content: string(),
  //      enclosures: array(
  //        object({
  //          url: string(),
  //          type: string(),
  //        }),
  //      ),
  //    }),
  //  ),
  //})

  //let feed = (await parseFeed(
  //  `${process.env.NEXT_PUBLIC_URL}/api/feed`,
  //)) as unknown
  //let items = parse(FeedSchema, feed).items

  let episodes: Array<Episode> = items.map(
    ({ id, title, description, content, audio, published }) => ({
      id,
      title: `${id}: ${title}`,
      published: new Date(published),
      description,
      content,
      audio: audio,
    }),
  )

  return episodes
}
