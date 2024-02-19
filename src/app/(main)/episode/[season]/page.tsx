import { redirect } from 'next/navigation'

export default async function Episode({
  params,
}: {
  params: { season: string }
}) {
  redirect("/episode/1/" + params.season)
}
