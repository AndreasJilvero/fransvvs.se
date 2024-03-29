export const config = {
  unstable_runtimeJS: false
}

export default function Suppliers() {
  return (
    <>
      <h2 className="text-2xl pb-4">Leverantörer</h2>

      <ul className="ml-2 list-inside list-disc">
        <li>
          <a href="http://www.nibe.se/">Nibe</a>
          <span>
            {' '}
            - Värmepumpar, vedpannor, pelletspannor och varmvattenberedare.
          </span>
        </li>
        <li>
          <a href="http://www.gustavsberg.se/">Gustavsberg</a>
          <span> - Blandare, porslin, dusch och bad.</span>
        </li>
        <li>
          <a href="http://www.moraarmatur.se/">Mora armatur</a>
          <span> - Blandare för kök och bad.</span>
        </li>
        <li>
          <a href="http://www.fmmattsson.com/index2.html">FMMattsson</a>
          <span> - Blandare för kök och bad.</span>
        </li>
        <li>
          <a href="http://www.inr.se/sv/">Inredningsglas</a>
          <span> - Duschar i glas.</span>
        </li>
        <li>
          <a href="http://www.svedbergs.se/se/">Svedbergs</a>
          <span> - Allt för badrum.</span>
        </li>
        <li>
          <a href="http://www.ifo.se/">Ifö</a>
          <span> - Badrum, disk- och tvättbänkar.</span>
        </li>
        <li>
          <a href="http://www.ido.se/">Ido</a>
          <span> - Allt för Badrum.</span>
        </li>
        <li>
          <a href="http://www.varmebaronen.se/">Värmebaronen</a>
          <span> - Vedpannor, pelletspannor och pelletsbrännare.</span>
        </li>
        <li>
          <a href="http://www.metrotherm.se/">Metro Therm</a>
          <span> - Varmvattenberedare och pannor.</span>
        </li>
        <li>
          <a href="http://www.effecta.se/">Effecta</a>
          <span> - Ved och pelletspannor, solfångare.</span>
        </li>
        <li>
          <a href="http://www.uponor.se/">Uponor</a>
          <span> - Golvvärme mm.</span>
        </li>
        <li>
          <a href="http://www.callidus.se/">Callidus</a>
          <span> - Vattenrening.</span>
        </li>
        <li>
          <a href="http://www.aquaexpert.se/sv/sv/hem/hem.php">Aqua Expert</a>
          <span> - Vattenrening.</span>
        </li>
      </ul>
    </>
  );
}
