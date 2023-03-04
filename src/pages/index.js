import Onboarding from '../components/Onboarding/onboarding';


export default function Home({authUrl}) {
  return (
    <>
    <Onboarding authUrl={authUrl} />
    {/* If cookie is present then show dashboard if not present then show OnBoarding screen */}
    </>
  )
}

// serversideprops to get cookie and check
export async function getServerSideProps(context) {
  // Check cookie if cookie is present then dont do the next steps
  const response = await fetch('http://localhost:3000/api/auth/google');
  const { url } = await response.json();
  return {
    props: { authUrl: url }, // will be passed to the page component as props
  }
  // if cookie 
}
