import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Une erreur s'est produite</h1>
            <p className="text-gray-600 mb-4">{this.state.error?.message || 'Erreur inconnue'}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
            >
              Recharger la page
            </button>
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-sm text-gray-500">Détails de l'erreur</summary>
              <pre className="mt-2 text-xs bg-gray-100 p-4 rounded overflow-auto">
                {this.state.error?.stack}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

