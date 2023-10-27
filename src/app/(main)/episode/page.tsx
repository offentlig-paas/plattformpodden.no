import { redirect } from 'next/navigation'

export default async function Episode({}: { params: { episode: string } }) {
  redirect('/')
}
