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
      <h2>Completed Labs</h2>

      <ul style={{ listStyle: "none" }}>
        <li>Docker</li>
        <li>LocalStack</li>
        <li>Terraform</li>
        <li>Vercel</li>
      </ul>
      <p>Preview Deployment Branch</p>
    </main>
  );
}