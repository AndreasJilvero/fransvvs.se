export default function Home() {
  return (
    <>
      <h2 className="text-2xl pb-4">
        Vi är ett serviceföretag som utför arbeten med allt inom VVS
      </h2>
      <p className="pb-2">
        Vi arbetar inom Marks Kommun i Västra Götalands län och främst mot
        privatkunder men har även erfarenhet av industri.
      </p>
      <p className="pb-2">
        Områden som vi arbetar inom och har erfarenhet av är:
      </p>

      <ul className="ml-2 list-inside list-disc">
        <li>
          Värmeanläggningar
          <ul className="ml-8 list-inside list-disc">
            <li>
              <a href="http://www.nibe.se/" target="_blank">
                Värmepumpar från Nibe
              </a>{' '}
              (
              <a
                href="http://www.nibe.se/Produkter/Bergvarmepumpar/"
                target="_blank"
              >
                Jord- och bergvärme
              </a>
              ,{' '}
              <a
                href="http://www.nibe.se/Produkter/Luftvatten-varmepump/"
                target="_blank"
              >
                Luftvärme
              </a>
              ,{' '}
              <a
                href="http://www.nibe.se/Produkter/Franluftsvarmepumpar/"
                target="_blank"
              >
                Frånluft
              </a>
              )
            </li>
            <li>Pelletsbrännare</li>
            <li>Vedpannor med ackumulatortankar</li>
            <li>Solvärme</li>
            <li>Oljebrännare</li>
          </ul>
        </li>
        <li>
          Vattenanläggningar
          <ul className="ml-8 list-inside list-disc">
            <li>Pumpar för grävda och borrade brunnar</li>
            <li>Vattenrening</li>
          </ul>
        </li>
        <li>
          Badrum
          <ul className="ml-8 list-inside list-disc">
            <li>Certifierade för säkra vatteninstallationer</li>
            <li>Försäljning av allt inom badrummet</li>
          </ul>
        </li>
        <li>
          Avlopp
          <ul className="ml-8 list-inside list-disc">
            <li>In- och utvändiga avloppsinstallationer</li>
            <li>Spolning/Rensning med effektiva maskiner</li>
            <li>Sökning av rör i mark, filmning av rör invändigt</li>
          </ul>
        </li>
      </ul>
    </>
  );
}
