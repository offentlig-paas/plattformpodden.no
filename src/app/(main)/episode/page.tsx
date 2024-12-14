import { redirect } from 'next/navigation'

type Params = Promise<{ episode: string }>;

export default async function Episode({ }: { params: Params }) {
  redirect('/')
}
