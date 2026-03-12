import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import useSEO from "../../hooks/useSEO";

const GRID_SIZE = 20;
const CANVAS_SIZE = 400; // 20x20 grid

export default function Error() {
  useSEO(
    "404 Not Found",
    "The page you are looking for does not exist. Why not play a game of Snake while you're here?"
  );

  const canvasRef = useRef(null);
  const [direction, setDirection] = useState({ x: 1, y: 0 }); // Move right initially
  const [snake, setSnake] = useState([{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const savedHighScore = localStorage.getItem('snakeHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  useEffect(() => {
    // Handle Keyboard Inputs
    const handleKeyDown = (e) => {
      // Prevent default scrolling for arrow keys
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }

      if (!gameStarted && e.key === " ") {
        setGameStarted(true);
        return;
      }
      if (gameOver && e.key === " ") {
        resetGame();
        return;
      }

      switch (e.key) {
        case "ArrowUp":
        case "w":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
        case "s":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
        case "a":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
        case "d":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, gameStarted, gameOver]);

  // Game Loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const head = { x: prevSnake[0].x + direction.x, y: prevSnake[0].y + direction.y };

        // Wall Collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          handleGameOver();
          return prevSnake;
        }

        // Self Collision
        if (prevSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
          handleGameOver();
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // Food Collision
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 10);
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop(); // Remove tail if no food eaten
        }

        return newSnake;
      });
    };

    const intervalId = setInterval(moveSnake, 100); // Game speed
    return () => clearInterval(intervalId);
  }, [direction, food, gameStarted, gameOver]);

  // Canvas Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Clear Canvas
    ctx.fillStyle = "#1d2021"; // Gruvbox dark background
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // Draw Grid Lines (optional, for retro feel)
    ctx.strokeStyle = "#3c3836"; // subtle grid color
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= CANVAS_SIZE; i += CANVAS_SIZE / GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, CANVAS_SIZE);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(CANVAS_SIZE, i);
      ctx.stroke();
    }

    // Draw Food
    ctx.fillStyle = "#fb4934"; // Gruvbox Red
    ctx.fillRect(
      food.x * (CANVAS_SIZE / GRID_SIZE),
      food.y * (CANVAS_SIZE / GRID_SIZE),
      CANVAS_SIZE / GRID_SIZE,
      CANVAS_SIZE / GRID_SIZE
    );

    // Draw Snake
    snake.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? "#b8bb26" : "#98971a"; // Gruvbox Green (head is brighter)
      ctx.fillRect(
        segment.x * (CANVAS_SIZE / GRID_SIZE) + 1,
        segment.y * (CANVAS_SIZE / GRID_SIZE) + 1,
        (CANVAS_SIZE / GRID_SIZE) - 2, // Slight gap between segments
        (CANVAS_SIZE / GRID_SIZE) - 2
      );
    });
  }, [snake, food]);

  const generateFood = (currentSnake) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      // Ensure food doesn't spawn on snake
      // eslint-disable-next-line no-loop-func
      if (!currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)) {
        break;
      }
    }
    return newFood;
  };

  const handleGameOver = () => {
    setGameOver(true);
    setGameStarted(false);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('snakeHighScore', score.toString());
    }
  };

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }]);
    setDirection({ x: 1, y: 0 });
    setFood(generateFood([{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }]));
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10 mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-12 bg-vibrant-red" />
          <h1 className="text-xl md:text-2xl font-mono font-black uppercase tracking-[0.25em] text-vibrant-red">
            Error 404
          </h1>
          <span className="h-px w-12 bg-vibrant-red" />
        </div>
        <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground font-mono text-sm">
          But hey, while you're lost in the void, play some Snake!
        </p>
      </motion.div>

      {/* Game Wrapper */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 w-full max-w-md bg-secondary/30 p-4 border border-border backdrop-blur-sm"
      >
        {/* Score Board */}
        <div className="flex justify-between items-center mb-4 font-mono text-sm border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">SCORE:</span>
            <span className="text-primary font-bold">{score}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-vibrant-yellow" />
            <span className="text-muted-foreground">HI:</span>
            <span className="text-vibrant-yellow font-bold">{highScore}</span>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="relative flex justify-center bg-black border border-border aspect-square w-full">
          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20 backdrop-blur-sm text-center">
              <p className="text-primary font-mono font-bold text-lg mb-2 animate-pulse">PRESS SPACE TO START</p>
              <p className="text-muted-foreground font-mono text-xs">Use W A S D or Arrow Keys to move</p>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20 backdrop-blur-sm text-center">
              <h3 className="text-vibrant-red font-mono font-black text-3xl mb-2">GAME OVER</h3>
              <p className="text-foreground font-mono mb-4 text-sm">Score: {score}</p>
              <button
                onClick={resetGame}
                className="flex items-center justify-center gap-2 px-6 py-2 bg-primary text-background font-mono font-bold hover:bg-primary/90 transition-colors"
              >
                <RefreshCw className="w-4 h-4" /> PLAY AGAIN
              </button>
            </div>
          )}

          <canvas
            ref={canvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 z-10"
      >
        <Link
          to="/"
          className="vercel-button-secondary px-8 py-3 h-12 gap-2 text-sm group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
      </motion.div>
    </div>
  );
}
