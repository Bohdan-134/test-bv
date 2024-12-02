export function initButtonBorders() {
    function createSVGForButton(button) {
        const borderColor = button.getAttribute('data-border-color') || 'red';
        const borderThickness = parseInt(button.getAttribute('data-border-thickness')) || 2;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "animated-border");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("viewBox", `0 0 ${button.offsetWidth} ${button.offsetHeight}`);
        svg.setAttribute("preserveAspectRatio", "none");

        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", borderThickness / 2);
        rect.setAttribute("y", borderThickness / 2);
        rect.setAttribute("width", button.offsetWidth - borderThickness);
        rect.setAttribute("height", button.offsetHeight - borderThickness);
        rect.setAttribute("rx", 3);
        rect.setAttribute("ry", 3);
        rect.setAttribute("fill", "none");
        rect.setAttribute("stroke", borderColor);
        rect.setAttribute("stroke-width", borderThickness);

        svg.appendChild(rect);
        button.appendChild(svg);

        requestAnimationFrame(() => {
            const length = rect.getTotalLength();
            rect.setAttribute("stroke-dasharray", length);
            rect.setAttribute("stroke-dashoffset", length);

            button.addEventListener("mouseenter", () => {
                rect.style.transition = "stroke-dashoffset 3s ease";
                rect.setAttribute("stroke-dashoffset", "0");
            });

            button.addEventListener("mouseleave", () => {
                rect.style.transition = "stroke-dashoffset 3s ease";
                rect.setAttribute("stroke-dashoffset", length);
            });
        });

        const resizeObserver = new ResizeObserver(() => {
            svg.setAttribute("viewBox", `0 0 ${button.offsetWidth} ${button.offsetHeight}`);
            rect.setAttribute("x", borderThickness / 2);
            rect.setAttribute("y", borderThickness / 2);
            rect.setAttribute("width", button.offsetWidth - borderThickness);
            rect.setAttribute("height", button.offsetHeight - borderThickness);
        });
        resizeObserver.observe(button);
    }

    document.querySelectorAll('[data-border-svg="true"]').forEach(button => {
        createSVGForButton(button);
    });
}