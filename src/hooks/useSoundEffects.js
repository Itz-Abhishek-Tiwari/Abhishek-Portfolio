/**
 * Custom hook to generate and play mechanical UI sound effects using Web Audio API.
 * No external assets required.
 */
export default function useSoundEffects() {
    const playClick = () => {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.type = "square";
            // Retro "Coin" sound: Quick jump from B5 to E6
            const now = audioCtx.currentTime;
            oscillator.frequency.setValueAtTime(987.77, now);
            oscillator.frequency.setValueAtTime(1318.51, now + 0.05);

            gainNode.gain.setValueAtTime(0.05, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            oscillator.stop(now + 0.15);
        } catch (e) {
            console.warn("Audio blocked", e);
        }
    };

    const playHover = () => {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.type = "square";
            // Retro "Blip"
            const now = audioCtx.currentTime;
            oscillator.frequency.setValueAtTime(1500, now);

            gainNode.gain.setValueAtTime(0.02, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            oscillator.stop(now + 0.05);
        } catch {
            // Silent fail
        }
    };

    const playTyping = () => {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.type = "square";
            // Retro "Mechanical Click"
            const now = audioCtx.currentTime;
            oscillator.frequency.setValueAtTime(400, now);
            oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.02);

            gainNode.gain.setValueAtTime(0.03, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            oscillator.stop(now + 0.02);
        } catch {
            // Silent fail
        }
    };

    return { playClick, playHover, playTyping };
}
