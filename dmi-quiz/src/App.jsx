import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/quiz/WelcomeScreen';
import QuestionScreen from './components/quiz/QuestionScreen';
import ResultScreen from './components/results/ResultScreen';
import { questions } from './data/questions';
import { saveQuizResult, trackVisit } from './lib/analytics';
import './styles/global.css';

/**
 * Componente principal de la aplicación
 * Gestiona todo el flujo del quiz
 */
function App() {
  // Estados principales
  const [stage, setStage] = useState('welcome'); // 'welcome' | 'quiz' | 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [scores, setScores] = useState({ ux: 0, ui: 0, dev: 0 });
  const [isAnswering, setIsAnswering] = useState(false);
  const [dominantProfile, setDominantProfile] = useState(null);
  const [vocationalRoute, setVocationalRoute] = useState(null);

  /**
   * Registrar visita cuando la app se monta
   */
  useEffect(() => {
    trackVisit();
  }, []);

  /**
   * Manejar inicio del test
   */
  const handleStart = () => {
    setStage('quiz');
    setCurrentQuestion(0);
    setAnswers([]);
    setScores({ ux: 0, ui: 0, dev: 0 });
    setIsAnswering(false);
  };

  /**
   * Manejar selección de respuesta
   */
  const handleAnswer = async (answer) => {
    setIsAnswering(true);

    // Simular pequeño delay para mejor UX
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Guardar respuesta
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    // Actualizar scores para preguntas de perfil
    const currentQuestionData = questions[currentQuestion];
    let newScores = { ...scores };

    if (currentQuestionData.type === 'profile' || (!currentQuestionData.type && currentQuestion < 5)) {
      const profileKey = answer.type || answer.profile;
      if (profileKey) {
        newScores[profileKey] = (newScores[profileKey] || 0) + 1;
      }
      setScores(newScores);
    }

    // Pasar a siguiente pregunta o mostrar resultado
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswering(false);
    } else {
      // Quiz completado
      await finalizeQuiz(newScores, answer.route || null);
    }
  };

  /**
   * Finalizar el quiz y calcular resultados
   */
  const finalizeQuiz = async (finalScores, route) => {
    // Determinar perfil dominante
    const profile = calculateDominantProfile(finalScores);
    setDominantProfile(profile);
    setVocationalRoute(route);

    // Guardar en Supabase
    const quizData = {
      answers,
      scores: finalScores,
      dominantProfile: profile,
      vocationalRoute: route,
    };

    await saveQuizResult(quizData);

    // Mostrar resultados
    setStage('result');
    setIsAnswering(false);
  };

  /**
   * Calcular perfil dominante basado en scores
   */
  const calculateDominantProfile = (finalScores) => {
    const { ux, ui, dev } = finalScores;

    if (ux >= ui && ux >= dev) return 'ux';
    if (ui >= ux && ui >= dev) return 'ui';
    return 'dev';
  };

  /**
   * Reiniciar el quiz
   */
  const handleRestart = () => {
    setStage('welcome');
    setCurrentQuestion(0);
    setAnswers([]);
    setScores({ ux: 0, ui: 0, dev: 0 });
    setDominantProfile(null);
    setVocationalRoute(null);
    setIsAnswering(false);
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <AnimatePresence mode="wait">
        {/* Pantalla de Bienvenida */}
        {stage === 'welcome' && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}

        {/* Pantalla de Quiz */}
        {stage === 'quiz' && (
          <QuestionScreen
            key="quiz"
            question={questions[currentQuestion]}
            currentIndex={currentQuestion}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            isAnswering={isAnswering}
          />
        )}

        {/* Pantalla de Resultados */}
        {stage === 'result' && (
          <ResultScreen
            key="result"
            scores={scores}
            dominantProfile={dominantProfile}
            vocationalRoute={vocationalRoute}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
