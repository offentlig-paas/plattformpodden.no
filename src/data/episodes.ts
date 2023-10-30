import { Episode } from '../lib/episodes'

export const episodes: Episode[] = [
  // Add new episodes to the top of the list
  {
    id: 2,
    type: 'bonus',
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
    type: 'episode',
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
