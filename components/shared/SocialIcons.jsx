import Link from 'next/link'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function SocialIcons() {
  return (
    <div className="flex gap-5">
      <Link href="https://www.facebook.com/mujahid66" target="_blank">
        <span className="social-icon">
          <FaFacebookF />
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/md-mozahid-3034b3109/"
        target="_blank">
        <span className="social-icon">
          <FaLinkedinIn />
        </span>
      </Link>
      <Link href="https://x.com/i/flow/login" target="_blank">
        <span className="social-icon">
          <FaTwitter />
        </span>
      </Link>
      <Link href="https://github.com/md-mozahid" target="_blank">
        <span className="social-icon">
          <FaGithub />
        </span>
      </Link>
    </div>
  )
}
