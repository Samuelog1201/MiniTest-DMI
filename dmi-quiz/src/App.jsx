import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';
import './styles/global.css';

/**
 * Componente principal de la aplicación
 * Maneja los estados y transiciones del quiz
 */
function App() {
  // Estados del quiz
  const [stage, setStage] = useState('welcome'); // 'welcome' | 'quiz' | 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ ux: 0, ui: 0, dev: 0 });
  const [isAnswering, setIsAnswering] = useState(false);
  const [result, setResult] = useState(null);

  /**
   * Maneja el inicio del test
   */
  const handleStart = () => {
    setStage('quiz');
    setCurrentQuestion(0);
    setScores({ ux: 0, ui: 0, dev: 0 });
  };

  /**
   * Maneja la selección de respuesta
   */
  const handleAnswer = async (type) => {
    setIsAnswering(true);

    // Simular pequeño delay para mejor UX
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Actualizar scores
    const newScores = {
      ...scores,
      [type]: scores[type] + 1,
    };
    setScores(newScores);

    // Verificar si hay más preguntas
    if (currentQuestion < questions.length - 1) {
      // Siguiente pregunta
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswering(false);
    } else {
      // Fin del quiz - calcular resultado
      const finalResult = calculateResult(newScores);
      setResult(finalResult);
      setStage('result');
    }
  };

  /**
   * Calcula el perfil ganador basado en los scores
   */
  const calculateResult = (finalScores) => {
    const { ux, ui, dev } = finalScores;

    if (ux > ui && ux > dev) return 'ux';
    if (ui > ux && ui > dev) return 'ui';
    if (dev > ux && dev > ui) return 'dev';

    // En caso de empate, retorna el mayor
    const max = Math.max(ux, ui, dev);
    if (max === ux) return 'ux';
    if (max === ui) return 'ui';
    return 'dev';
  };

  /**
   * Reinicia el quiz
   */
  const handleRestart = () => {
    setStage('welcome');
    setCurrentQuestion(0);
    setScores({ ux: 0, ui: 0, dev: 0 });
    setResult(null);
    setIsAnswering(false);
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <AnimatePresence mode="wait">
        {stage === 'welcome' && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}

        {stage === 'quiz' && (
          <div key="quiz" className="min-h-screen w-full flex flex-col">
            <ProgressBar current={currentQuestion + 1} total={questions.length} />
            <div className="flex-1 flex items-center justify-center">
              <QuestionCard
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
                isAnswering={isAnswering}
              />
            </div>
          </div>
        )}

        {stage === 'result' && (
          <ResultScreen
            key="result"
            result={result}
            scores={scores}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
