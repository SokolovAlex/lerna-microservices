interface IWidget {
    mount: (el: HTMLElement) => void;
    unmount: () => void;
    name: string;
}