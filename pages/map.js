export const config = {
  unstable_runtimeJS: false
}

export default function Map() {
  return (
    <>
      <h2 className='text-2xl  pb-4'>Karta</h2>
      <iframe className='w-full'
        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24287.248804003753!2d12.510659733654029!3d57.44921139734827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46501931429df795%3A0xe411b779fa8990b9!2sFrans%20VVS%20AB!5e0!3m2!1sen!2sse!4v1651346847314!5m2!1sen!2sse"}
        height="500"
        allowFullScreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
