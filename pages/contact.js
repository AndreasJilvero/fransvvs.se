import Image from 'next/image';
import magnus from './../public/magnus.jpg';
import jan from './../public/jan.jpg';
import { InlineIcon } from '@iconify/react';

const employees = [
  {
    image: jan,
    name: 'Jan Jilvero',
    cellPhone: '070 624 72 80',
    homePhone: '0320 60030',
    mail: 'fransvvs@gmail.com',
    streetAddress: 'Surteby Enelyckan,',
    zipAndCity: '51994 Björketorp',
  },
  {
    image: magnus,
    name: 'Magnus Jilvero',
    cellPhone: '070 622 65 98',
    homePhone: '0320 92222',
    mail: 'magnus.jilvero@gmail.com',
    streetAddress: 'Dragered Wikmans,',
    zipAndCity: '51022 Hyssna',
  },
];

const globalizeNumber = (number) => {
  return `tel:+46${number.replace(/ /g, '').substring(1, number.length)}`;
};

export default function Contact() {
  return (
    <>
      <h2 className="text-3xl pb-4">Kontakt</h2>
      <div className="flex flex-col md:flex-row justify-evenly gap-x-4 gap-y-4 md:gap-y-4">
        {employees.map((emp, key) => {
          return (
            <div
              key={key}
              className="flex flex-row w-full bg-white rounded-lg border shadow-md md:max-w-xl hover:bg-gray-100"
            >
              <div className="w-24 h-full">
                <Image
                  className="rounded-tl-lg object-cover"
                  src={emp.image}
                />
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
                    <InlineIcon icon="ic:outline-settings-phone" />{' '}
                    {emp.homePhone}
                  </a>
                  <a
                    className="flex items-center gap-1"
                    href={globalizeNumber(emp.cellPhone)}
                  >
                    <InlineIcon icon="ic:outline-settings-cell" />{' '}
                    {emp.cellPhone}
                  </a>
                </span>

                <a
                  className="flex items-center gap-1"
                  href={`mailto:${emp.mail}`}
                >
                  <InlineIcon icon="ic:outline-email" /> {emp.mail}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
