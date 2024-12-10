export default function Footer() {
    return (
      <footer
        style={{
          background: "black",
          color: "white",
        }}
        className="p-8"
      >
        <div className="grid grid-cols-2 gap-4">
          {/* Personal Info */}
          <div>
            <p className="text-body font-thin">Alexis F. Sanchez</p>
          </div>
  
          {/* Connect Section */}
          <div>
            <h3 className="font-bold mb-2">Connect</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.linkedin.com/in/alexis-sanchez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CaboRojo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:alexisfsanchezm@gmail.com"
                  className="text-gray-400 hover:underline"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel: +1 787-349-7024"
                  className="text-gray-400 hover:underline"
                >
                  Cellphone
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
}
  