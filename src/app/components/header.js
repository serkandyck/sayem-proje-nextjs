import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth';
import Logout from '../login/logout';
import DropdownComp from '../login/dropdowncomp';



export default async function Header() {
    const session = await getServerSession()

    return (
        <div className="inner">
            <Link  href="/" className="masthead-brand" title="SAYEM">
                <Image
                src="/img/sayem-logo.png"
                width={220}
                height={70}
                className="logo-img" alt="SAYEM"
                />
            </Link>
            <nav className="nav nav-masthead sayem-nav-link justify-content-center">
                <Link  className="btn sayem-secondary-button" href="/find-request">Talep Sorgulama</Link >
                {!!session && <DropdownComp />}
                {!session && <Link  className="btn sayem-primary-button" href="/login">Yetkili Girişi</Link >}
            </nav>
        </div>
    )
}