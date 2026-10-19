import { Component } from "react";
// Keeps one failing part (e.g. the 3D scene) from blanking the whole site. Resets when resetKey (the URL) changes.
export default class ErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidUpdate(prev) { if (prev.resetKey !== this.props.resetKey && this.state.failed) this.setState({ failed: false }); }
  render() { return this.state.failed ? (this.props.fallback ?? <p className="center pad">Something went wrong. Please try another page.</p>) : this.props.children; }
}
