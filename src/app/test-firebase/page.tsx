export default function TestFirebase() {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? "SET" : "(undefined)";
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "(undefined)";
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "(undefined)";

  return (
    <div style={{ padding: 24 }}>
      <h1>Firebase env check</h1>
      <pre>{JSON.stringify({ apiKey, projectId, authDomain }, null, 2)}</pre>
    </div>
  );
}
