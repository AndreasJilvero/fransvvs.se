import { InlineIcon } from '@iconify/react';

const globalizeNumber = (number) => {
  return `tel:+46${number.replace(/ /g, '').substring(1, number.length)}`;
};

export default function Card(props) {
  const {emp = {}} = props;
  
  return (
    <div
      className="flex flex-row w-full bg-white rounded-lg border shadow-md md:max-w-xl hover:bg-gray-100"
    >
      <div className="w-24 h-full">
        <img className="rounded-tl-lg object-cover" src={emp.image.src} alt={emp.name} />
      </div>
      <div className="px-4 pt-2 flex flex-col mb-4 overflow-hidden">
        <h3 className="text-xl">{emp.name}</h3>
        <span className="my-2">
          {emp.streetAddress}
          <br />
          {emp.zipAndCity}
        </span>
        <span className="my-2">
          <a
            className="flex items-center gap-1"
            href={globalizeNumber(emp.homePhone)}
          >
            <InlineIcon icon="ic:outline-settings-phone" /> {emp.homePhone}
          </a>
          <a
            className="flex items-center gap-1"
            href={globalizeNumber(emp.cellPhone)}
          >
            <InlineIcon icon="ic:outline-settings-cell" /> {emp.cellPhone}
          </a>
        </span>

        <a className="flex items-center gap-1" href={`mailto:${emp.mail}`}>
          <InlineIcon icon="ic:outline-email" /> {emp.mail}
        </a>
      </div>
    </div>
  );
}
