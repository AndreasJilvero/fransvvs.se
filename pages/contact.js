import Card from '../components/card';
import employees from '../employees';

export default function Contact() {
  return (
    <>
      <h2 className="text-3xl pb-4">Kontakt</h2>
      <div className="flex flex-col md:flex-row justify-evenly gap-x-4 gap-y-4 md:gap-y-4">
        {employees.map((emp, key) => {
          return (
            <Card key={key} emp={emp} />
          );
        })}
      </div>
    </>
  );
}
