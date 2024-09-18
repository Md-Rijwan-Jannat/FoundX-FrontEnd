import { Component, ReactNode } from "react";

type TErrorBoundaryProps = {
  fallback: ReactNode;
  children: ReactNode;
};
type TErrorBoundaryState = {
  hasError: boolean;
};

class errorBoundary extends Component<
  TErrorBoundaryProps,
  TErrorBoundaryState
> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedSateFromError() {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default errorBoundary;
