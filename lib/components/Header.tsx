import Link from "next/link"

const links = [
  { name: "Cryptocurrency", href: "/crypto" },
  { name: "Indicators", href: "/indicators" },
]

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-center px-6 py-3">
      <nav className="flex w-full max-w-7xl items-center justify-between px-6">
        <Logo />

        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-theme-paragraph"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Icon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.18182C6.57757 2.18182 2.18182 6.57757 2.18182 12C2.18182 17.4224 6.57757 21.8182 12 21.8182C17.4224 21.8182 21.8182 17.4224 21.8182 12C21.8182 6.57757 17.4224 2.18182 12 2.18182ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
        fill="#09090B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9865 7.93164C18.3063 6.92427 17.351 5.97813 16.3467 6.30765L9.50624 8.55218C9.11027 8.68211 8.80091 8.99447 8.67481 9.39167L6.55523 16.0683C6.23543 17.0757 7.19076 18.0219 8.19499 17.6923L15.0355 15.4478C15.4314 15.3179 15.7408 15.0055 15.8669 14.6083L17.9865 7.93164ZM12.2696 13.5584C13.1303 13.5584 13.828 12.8607 13.828 12C13.828 11.1393 13.1303 10.4415 12.2696 10.4415C11.4089 10.4415 10.7112 11.1393 10.7112 12C10.7112 12.8607 11.4089 13.5584 12.2696 13.5584Z"
        fill="#09090B"
      />
    </svg>
  )
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Icon />
      <strong>CryptoCompass</strong>
    </Link>
  )
}
