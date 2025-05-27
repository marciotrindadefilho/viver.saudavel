export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600">Página não encontrada</p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  )
}
