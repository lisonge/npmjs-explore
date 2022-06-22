import { render } from 'preact'

const list = location.pathname.split('/');
const packageName = list[2];
const version = list[4] ?? 'latest';

const jsdelivrUrl = `https://cdn.jsdelivr.net/npm/${packageName}@${version}/`;
const unpkgUrl = `https://unpkg.com/browse/${packageName}@${version}/`;

const App = (
    <div
        style={{
            marginLeft: '20px',
        }}
    >
        <a
            href={jsdelivrUrl}
            title={jsdelivrUrl}
            target="_blank"
            style={{ color: '#bb2e3e', textDecoration: 'none' }}
        >
            jsdelivr
        </a>
        <span
            style={{
                display: 'inline-block',
                width: '10px',
            }}
        ></span>
        <a
            href={unpkgUrl}
            title={unpkgUrl}
            target="_blank"
            style={{ color: '#bb2e3e', textDecoration: 'none' }}
        >
            unpkg
        </a>
    </div>
);

(() => {
    const box = document.querySelector<HTMLElement>(
        `span[title="${packageName}"]`
    )?.parentElement;
    if (!box) return;
    const container = document.createElement('div');
    box.appendChild(container);
    render(App, container)
})();
