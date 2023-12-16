import Image from 'next/image'
import Link from 'next/link'


export default function Header() {
    return (
        <div className="inner">
            <Link  href="/" className="masthead-brand" title="SAYEM">
                <Image
                src="/img/sayem-logo.png"
                width={217}
                height={69}
                className="logo-img" alt="SAYEM"
                />
            </Link>
            <nav className="nav nav-masthead sayem-nav-link justify-content-center">
                <Link  className="btn sayem-secondary-button" href="/find-request">Talep Sorgulama</Link >
                <Link  className="btn sayem-primary-button" href="/login">Yetkili Girişi</Link >
            </nav>
        </div>
    )
}