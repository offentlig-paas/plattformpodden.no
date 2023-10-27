/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    title: 'Plattformpodden',
    tagline: 'En podcast om applikasjonsplattformer og teamene som bygger de.',
    description: 'I denne podcasten snakker Hans Kristian Flaatten og Audun Fauchald Strand med menneskene som bygger applikasjonsplattformer og dykker ned i hvordan plattformen er bygget opp og hvilke unike problemstillinger teamene må løse for sin organisasjon.',
    hosts: [
      'Audun Fauchald Strand',
      'Hans Kristian Flaatten',
    ],
    providerUrls: {
      'RSS Feed': 'https://feeds.transistor.fm/plattformpodden',
    },
  },
}

module.exports = nextConfig
