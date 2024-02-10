export default function Home({
  searchParams: { error },
}: {
  searchParams: { error?: string };
}) {
  return (
    <main className="">
      {error ? (
        <AccessDenied />
      ) : (
        <>
          <div className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-x-4 text-center">
                <div className="space-y-2">
                  <h1>Get insights quickly with Google Forms</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
