import { redirect } from 'next/navigation'

type Params = Promise<{ season: string; episode: string }>;

export default async function Episode({ params }: { params: Params }) {
  const resolvedParams = await params;
  redirect("/episode/1/" + resolvedParams.episode);
}
