import { useRouter } from "next/router";

function Footer({ email, linkedin, github }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`mailto:${email}`);
  };

  return (
    <div>
      <h3>Contact Me:</h3>
      <ul>
        <li>
          {/* <button type="button" onClick={() => router.push(`mailto:${email}`)}>
            Gmail
          </button> */}
          <a href={email} onClick={handleClick}>
            Gmail
          </a>
        </li>
        <li>
          <a href={github}>Github</a>
        </li>
        <li>
          <a href={linkedin}>Linkedin</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
