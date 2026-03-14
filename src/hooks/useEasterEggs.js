import { useEffect, useCallback } from 'react';

/**
 * useEasterEggs — registers global keyboard hooks for easter eggs.
 *
 * Easter eggs:
 * 1. Konami code (↑↑↓↓←→←→ba) → triggers matrix rain overlay
 * 2. "?" key → opens keyboard shortcuts modal
 * 3. "g h" / "g p" / "g a" / "g c" → navigate sections (vim-like)
 */
export default function useEasterEggs({ onShortcutsOpen, onKonami, navigate }) {
    // ── Konami Code ───────────────────────────────────────────────────────
    useEffect(() => {
        const KONAMI = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'b', 'a'
        ];
        let progress = 0;

        const handleKey = (e) => {
            if (e.key === KONAMI[progress]) {
                progress++;
                if (progress === KONAMI.length) {
                    progress = 0;
                    onKonami?.();
                }
            } else {
                progress = e.key === KONAMI[0] ? 1 : 0;
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onKonami]);

    // ── "?" shortcut — open shortcuts modal ──────────────────────────────
    useEffect(() => {
        const handleKey = (e) => {
            const tag = e.target.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || e.ctrlKey || e.metaKey) return;
            if (e.key === '?') {
                e.preventDefault();
                onShortcutsOpen?.();
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onShortcutsOpen]);

    // ── "g X" vim-style navigation ────────────────────────────────────────
    useEffect(() => {
        let gPressed = false;
        let gTimer = null;

        const handleKey = (e) => {
            const tag = e.target.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || e.ctrlKey || e.metaKey) return;

            if (e.key === 'g') {
                gPressed = true;
                clearTimeout(gTimer);
                gTimer = setTimeout(() => { gPressed = false; }, 800);
                return;
            }

            if (gPressed) {
                gPressed = false;
                clearTimeout(gTimer);
                const routes = { h: '/', p: '/projects', a: '/articles', c: '/contact' };
                const route = routes[e.key];
                if (route) {
                    e.preventDefault();
                    navigate?.(route);
                }
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => {
            window.removeEventListener('keydown', handleKey);
            clearTimeout(gTimer);
        };
    }, [navigate]);
}
