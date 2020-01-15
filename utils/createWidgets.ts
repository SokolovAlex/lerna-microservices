export const createWidget = (widget: IWidget) => {
    window.widgets[widget.name] = widget;
};

window.widgets = window.widgets  || {};