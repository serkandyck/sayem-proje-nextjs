import Link from 'next/link'

export default function Footer() {
    return (
        <div className="inner">
            <p>Sayem yazılım geliştirici 5 projesi SERKAN DAYICIK</p>
            <p>
                <Link href="https://github.com/serkandyck/sayem-proje" target="_blank"> GitHub</Link>
                <Link href="https://www.linkedin.com/in/serkan-dayicik-697254118/" target="_blank">Linkedin</Link>
            </p>
        </div>
    )
}