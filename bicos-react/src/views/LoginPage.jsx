import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login:', formData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <div className="text-center mb-8">
            <Link to="/" className="font-['Arista'] text-[#424794] hover:text-[#2a2f86] transition-colors duration-300 text-5xl md:text-5xl">
              bicos
            </Link>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6">Login</h2>
            <p className="text-gray-600 mt-2">Bem-vindo de volta!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <div className="relative group">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors duration-200" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-gray-50 hover:bg-gray-50/80 transition-colors"
                  placeholder="Digite seu email"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-700">Senha</label>
                <Link to="/forgot-password" className="text-sm text-brand-primary hover:text-brand-secondary">
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative group">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors duration-200" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-gray-50 hover:bg-gray-50/80 transition-colors"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 px-4 font-semibold text-[#424794] border-2 border-[#424794] 
                  rounded-xl hover:bg-[#424794] hover:text-white transition-all duration-300
                  hover:shadow-md active:scale-95
                  disabled:opacity-70 disabled:cursor-not-allowed
                  flex items-center justify-center
                  ${isLoading ? 'bg-[#424794]' : ''}`}
              >
                {isLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  'Entrar'
                )}
              </button>
              <Link 
                to="/"
                className="w-full py-3.5 px-4 border-2 border-gray-200 text-gray-700
                         rounded-xl font-medium text-sm text-center block
                         hover:border-gray-300 hover:bg-gray-50
                         active:scale-[0.98] transition-all duration-200"
              >
                Voltar para início
              </Link>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Não tem uma conta?{' '}
              <Link to="/register" className="text-brand-primary hover:text-brand-secondary font-medium">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
