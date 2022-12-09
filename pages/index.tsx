import Link from "next/link";

function Page() {
  return (
    <div className="max-w-screen-lg mx-auto mt-20">
      <h1 className="text-4xl font-bold">Index</h1>
      <Link href="/users" className="d-link">
        Go to Users Page
      </Link>
    </div>
  );
}

export default Page;
