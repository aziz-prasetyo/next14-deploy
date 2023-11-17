export default function HelloPage() {
  const testVar = process.env.NEXT_PUBLIC_TEST_VAR;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-3xl">{testVar}</h1>
    </main>
  );
}
