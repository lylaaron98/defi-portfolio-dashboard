// src/lib/logger/ErrorBoundary.tsx
import React from "react";
import { logClientError } from "./client-logger";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    logClientError("React error boundary caught error", error, { info });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <GlobalErrorFallback />;
    }
    return this.props.children;
  }
}

// Global fallback UI for uncaught errors
export function GlobalErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
      <p className="text-gray-500 mb-4">
        An unexpected error occurred. Please refresh or contact support.
      </p>
    </div>
  );
}

// Comments:
// - Use ErrorBoundary at the app root or feature boundaries.
// - Never show sensitive error details to users.
