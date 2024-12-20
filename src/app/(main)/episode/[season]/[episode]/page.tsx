import { cache } from 'react'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { EpisodePlayButton } from '@/components/EpisodePlayButton'
import { FormattedDate } from '@/components/FormattedDate'
import { PauseIcon } from '@/components/PauseIcon'
import { PlayIcon } from '@/components/PlayIcon'
import { getAllEpisodes } from '@/lib/episodes'

const getEpisode = cache(async (season: string, id: string) => {
  const allEpisodes = await getAllEpisodes()
  const episode = allEpisodes.find((episode) => episode.season.toString() === season && episode.id.toString() === id)

  if (!episode) {
    notFound()
  }

  return episode
})

type Params = Promise<{ season: string; episode: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const resolvedParams = await params;
  const episode = await getEpisode(resolvedParams.season, resolvedParams.episode);

  return {
    title: episode.title,
    description: episode.description,
  }
}

export default async function Episode({ params }: { params: Params }) {
  const resolvedParams = await params;
  const episode = await getEpisode(resolvedParams.season, resolvedParams.episode);
  const date = new Date(episode.published)

  return (
    <article className="py-16 lg:py-36">
      <Container>
        <header className="flex flex-col">
          <div className="flex items-center gap-6">
            <EpisodePlayButton
              episode={episode}
              className="group relative flex h-18 w-18 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring focus:ring-slate-700 focus:ring-offset-4"
              playing={
                <PauseIcon className="h-9 w-9 fill-white group-active:fill-white/80" />
              }
              paused={
                <PlayIcon className="h-9 w-9 fill-white group-active:fill-white/80" />
              }
            />
            <div className="flex flex-col">
              <h1 className="mt-2 content-baseline text-4xl font-bold text-slate-900">
                {episode.title}
              </h1>
              <div className="order-first flex items-center gap-x-4 font-mono text-sm">
                <FormattedDate
                  date={date}
                  className="leading-7 text-slate-500"
                />
                {episode.type === 'trailer' && (
                  <span className="relative z-10 rounded-sm bg-gray-500 px-3 py-0.5 font-medium text-gray-50">
                    TRAILER
                  </span>
                )}
              </div>
            </div>
          </div>
          <p className="ml-24 mt-3 text-lg font-medium leading-8 text-slate-700">
            {episode.description}
          </p>
        </header>
        <hr className="my-12 border-gray-200" />
        <div
          className="prose prose-slate mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
          dangerouslySetInnerHTML={{ __html: episode.content }}
        />
        <hr className="my-12 border-gray-200" />
        <ul
          role="list"
          className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 xl:grid-cols-2"
        >
          {episode.people.map((person) => (
            <a href={person.href} className="group" key={person.name}>
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.img}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </Container>
    </article>
  )
}
