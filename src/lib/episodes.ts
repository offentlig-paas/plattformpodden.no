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
  let FeedSchema = object({
    items: array(
      object({
        itunes_episode: number(),
        title: string(),
        published: number(),
        description: string(),
        content: string(),
        enclosures: array(
          object({
            url: string(),
            type: string(),
          }),
        ),
      }),
    ),
  })

  let feed = (await parseFeed(
    "https://feeds.transistor.fm/plattformpodden"
  )) as unknown
  let items = parse(FeedSchema, feed).items

  let episodes: Array<Episode> = items.map(
    ({ itunes_episode: id, title, description, content, enclosures, published }) => ({
      id,
      title: `${id}: ${title}`,
      published: new Date(published),
      description: description.replace(/(<([^>]+)>)/gi, ""), // Remove HTML tags
      content,
      audio: enclosures.map((enclosure) => ({
        src: enclosure.url,
        type: enclosure.type,
      }))[0],
    }),
  )

  return episodes
}
