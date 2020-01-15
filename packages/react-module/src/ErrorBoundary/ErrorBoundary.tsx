import React from 'react';

interface IProps {
    children: React.ReactNode 
}

interface IErrorState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IErrorState> {
    state = {
        hasError: false,
    }
    
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Что-то пошло не так.</h1>;
        }
        return this.props.children; 
    }
}

export { ErrorBoundary };
