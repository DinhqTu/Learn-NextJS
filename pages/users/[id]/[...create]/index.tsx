import { useRouter } from 'next/router';

function Create() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <h1> Create User ID Page</h1>
      <h1>{router.query.create}</h1>
    </>
  );
}

export default Create;
