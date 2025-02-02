function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Termos de Uso e Política de Privacidade
                </h1>
                
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                    <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            1. Aceitação dos Termos
                        </h2>
                        <p className="mb-4">
                            Ao acessar e usar o Bicos, você concorda com estes termos e condições.
                        </p>
                        {/* Add more sections as needed */}
                    </section>

                    <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            2. Política de Privacidade
                        </h2>
                        <p className="mb-4">
                            Proteger sua privacidade é extremamente importante para nós.
                        </p>
                        {/* Add more sections as needed */}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default TermsPage;
