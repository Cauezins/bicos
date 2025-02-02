import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-['Arista'] text-[#424794] text-3xl">bicos</Link>
            <p className="mt-4 text-gray-600 text-sm max-w-md">
              Conectamos profissionais qualificados a pessoas que precisam de serviços, 
              de forma simples e segura.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Links Rápidos</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/about" className="text-gray-600 hover:text-[#424794] text-sm">Sobre nós</Link>
              <Link to="/contact" className="text-gray-600 hover:text-[#424794] text-sm">Contato</Link>
              <Link to="/terms" className="text-gray-600 hover:text-[#424794] text-sm">Termos de Uso</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-[#424794] text-sm">Privacidade</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contato</h3>
            <div className="flex flex-col space-y-3">
              <a href="mailto:contato@bicos.com" className="text-gray-600 hover:text-[#424794] text-sm">
                contato@bicos.com
              </a>
              <a href="tel:+5522999999999" className="text-gray-600 hover:text-[#424794] text-sm">
                (22) 99999-9999
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bicos. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#424794]">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-[#424794]">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-[#424794]">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
