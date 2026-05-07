const name = process.env.NEXT_PUBLIC_STUDENT_NAME;

export default function Home() {
  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "10%",
      }}
    >
      <h1>Lab 8 — Vercel Deployment</h1>

      <p>Student: {name}</p>
    </main>
  );
}