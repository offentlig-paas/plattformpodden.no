import { Episode } from '../../../lib/episodes'
import { episodes } from '../../../data/episodes'
import RSS from 'rss'

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