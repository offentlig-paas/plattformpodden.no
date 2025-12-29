import Parser from 'rss-parser';
import { cache } from 'react';
import { unstable_cache } from 'next/cache';

export interface Episode {
  season: number
  id: number
  type: string
  title: string
  published: Date
  description: string
  content: string
  audio: {
    src: string
    type: string
  }
  people: {
    name: string
    role: string
    href?: string
    img?: string
  }[]
}

function ingressFromDescription(description: string) {
  return description.match(/<p>(.*?)<\/p>/)?.[1] || description
}

function contentFromDescription(description: string) {
  return description.replace(/<p>(.*?)<\/p>/, "")
}

function translateRole(role: string) {
  switch (role) {
    case 'Host':
      return 'Programleder'
    case 'Guest':
      return 'Gjest'
    case 'Producer':
      return 'Produsent'
    default:
      return role
  }
}

export const getAllEpisodes = cache(async () => {
  return unstable_cache(
    async () => {
      type CustomFeed = object;
      type CustomItem = {
        itunes: {
          season: string;
          episode: string;
          episodeType: string;
        }
        persons: {
          "_": string;
          "$": {
            role: string;
            href: string;
            img: string;
          }
        }[]
      };

      const parser: Parser<CustomFeed, CustomItem> = new Parser({
        customFields: {
          item: [['podcast:person', 'persons', { keepArray: true }]],
        },
      });
      const feed = await parser.parseURL('https://feeds.transistor.fm/plattformpodden')

      const episodes: Array<Episode> = feed.items.map(
        ({ title, pubDate, content, enclosure, persons, itunes: { season, episode, episodeType } }) => ({
          id: Number(episode),
          season: Number(season) || 0,
          type: episodeType || 'full',
          title: `${episode}: ${title}`,
          published: new Date(pubDate || 0),
          description: ingressFromDescription(content || ""),
          content: contentFromDescription(content || ""),
          audio: {
            src: enclosure?.url || "",
            type: enclosure?.type || "",
          },
          people: persons?.map(({ _: name, $: { role, href, img } }) => ({
            name,
            role: translateRole(role),
            href,
            img,
          })) || [],
        }),
      )

      return episodes
    },
    ['episodes'],
    {
      revalidate: 60, // Revalidate every 60 seconds
      tags: ['podcast-episodes']
    }
  )()
})
