function LoginPage({ authUrl }) {
  return (
    <a href={authUrl} className="border ">Sign in with Google</a>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch('http://localhost:3000/api/auth/google');
  const { url } = await response.json();
  return {
    props: { authUrl: url }, // will be passed to the page component as props
  }
}
export default LoginPage;
