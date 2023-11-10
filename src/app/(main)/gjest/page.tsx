import { Container } from '@/components/Container'

export default function Example() {
  return (
    <article className="py-16 lg:py-36">
      <Container>
        <header className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="mt-2 content-baseline text-4xl font-bold text-slate-900">
              Velkommen som gjest
            </h1>
          </div>
          <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
            Denne siden beskriver alt du trenger å vite for å være gjest på
            Plattformpodden. Det skal være kjekt å være gjest hos oss, og vi vil
            gjerne komme med noen gode råd og tips før innspillingen.
          </p>
        </header>
        <hr className="my-12 border-gray-200" />
        <div>
          {/* Lengde og format */}
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Lengde og format
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Vi setter av god tid til innspilling i studio, og klipper ned til
              en episode som er omtrent 30 minutter lang. Under selve
              innspillingen ønsker vi å ha en løs og uformell samtale med om
              plattformen dere bygger.
            </p>
          </div>

          {/* Overordnet agenda */}
          <div className="mt-4 px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Overordnet agenda
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Podcasten følger en løs overordnet agenda som er ment å gi en rød
              tråd gjennom episoden. Vi vil ikke følge agendaen til punkt å
              prikke, og spørsmålene under er kun ment som en pekepinn på hva vi
              kan snakke om.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              {/* Velkommen */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Velkommen
                </dt>
                <dt className="text-sm leading-6 text-gray-900">
                  <i>3 minutter</i>
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                  <ul className="list-disc pl-5">
                    <li>
                      Vi forteller litt om Plattformpodden og sesongens tema.
                    </li>
                    <li>
                      Vi ønsker deg velkommen og presenterer deg for lytterne.
                    </li>
                  </ul>
                </dd>
              </div>

              {/* Introduksjon */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Introduksjon
                </dt>
                <dt className="text-sm leading-6 text-gray-900">
                  <i>5 minutter</i>
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                  <ul className="list-disc pl-5">
                    <li>
                      Gjesten(e) presenterer seg selv, sin organisasjon, og
                      forteller litt om hva de jobber med.
                    </li>
                  </ul>
                </dd>
              </div>

              {/* Plattformen */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">
                  Plattformen
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                  <ul className="list-disc pl-5">
                    <li>Hvorfor begynte dere å bygge plattform?</li>
                    <li>Hvem bestemte at dere skulle lage plattform?</li>
                    <li>Hvor stort er plattformteamet?</li>
                    <li>Hvor mange team og applikasjoner har dere?</li>
                    <li>Hvilke plattformtjenester tilbyr dere?</li>
                    <li>
                      Hva er spesielt med <em>deres </em>plattform?
                    </li>
                  </ul>
                </dd>
              </div>

              {/* Utvikling */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">
                  Utvikling
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                  <ul className="list-disc pl-5">
                    <li>Hvordan er grensesnittet mellom plattform og apper?</li>
                    <li>Hvem har ansvaret for hva?</li>
                    <li>Hvilke språk benytter utviklerene?</li>
                    <li>Hvordan deployer utviklerne til plattformen?</li>
                    <li>Hvordan ser en typisk applikasjon ut hos dere?</li>
                  </ul>
                </dd>
              </div>

              {/* Infrastruktur */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">
                  Infrastruktur
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                  <ul className="list-disc pl-5">
                    <li>
                      Hvor mye ansvar har plattformteamet over infrastrukturen?
                    </li>
                    <li>Bruker dere sky?</li>
                    <li>Bruker dere Kubernetes?</li>
                    <li>Hvordan automatiserer dere infrastrukturen?</li>
                    <li>Hvordan overvåker dere plattformen?</li>
                    <li>Open Source vs Proprietær</li>
                  </ul>
                </dd>
              </div>

              {/* Læring */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">
                  Læring
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                  Alle gjør feil. Fortell om en gang plattformen feilet, hvordan
                  dere håndterte det og mest av alt hva dere lærte? Det er
                  utrolig mye læring i å feile, og vi vil gjerne høre om det.
                </dd>
              </div>

              {/* Avslutning */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Avslutning
                </dt>
                <dt className="text-sm leading-6 text-gray-900">
                  <i>5 minutter</i>
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                  Vi avslutter med å spørre om hva som er veien videre for
                  plattformen.
                </dd>
              </div>

              {/* Oppsummering */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Oppsummering
                </dt>
                <dt className="text-sm leading-6 text-gray-900">
                  <i>5 minutter</i>
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                  Programlederne oppsummerer hva de har lært i denne episoden og
                  avslutter med å takke gjesten(e).
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </article>
  )
}
