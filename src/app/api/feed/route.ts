import { Episode } from '../../../lib/episodes'
import RSS from 'rss'

const episodes: Episode[] = [
  // Add new episodes to the top of the list
  {
    id: 2,
    title: 'Episode 2 - Den med Skatten',
    published: new Date('2023-12-01'),
    description: 'I denne episoden av Plattformpodden snakker vi med Are Vattekar fra Skatteetaten om deres applikasjonsplattform som er basert på OpenShift om hvorfor Skatteetaten begynte å bygge plattform og hvor de er på vei videre.',
    content: 'This is the second episode',
    audio: {
      src: 'https://example.com/episode2.mp3',
      type: 'audio/mpeg',
    },
  },
  {
    id: 1,
    title: 'Episode 1 - Den med Polisen',
    published: new Date('2023-11-17'),
    description: 'I denne episoden av Plattformpodden snakker vi med Roger Karlsson og Erlend Wiig fra Politiets IT-enhet, også bedre kjent som PIT, om deres applikasjonsplattform Organa som er basert på Kubernetes.',
    content: 'This is the first episode',
    audio: {
      src: 'https://example.com/episode1.mp3',
      type: 'audio/mpeg',
    },
  },
]

export async function GET() {
  const feed = new RSS({
    title: 'My Podcast',
    description: 'A podcast about something',
    feed_url: 'https://example.com/feed.xml',
    site_url: 'https://example.com',
    language: 'en',
  })

  episodes.forEach((episode: Episode) => {
    feed.item({
      title: episode.title,
      description: episode.description,
      date: episode.published,
      enclosure: {
        url: episode.audio.src,
        type: episode.audio.type,
      },
      guid: episode.id.toString(),
      url: `https://example.com/episodes/${episode.id}`,
      custom_elements: [{
        "content:encoded": {
          _cdata: episode.content
        }}
      ]
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  })
}