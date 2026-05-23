import { supabase } from './supabase';

/**
 * Registrar una nueva visita al sitio
 */
export const trackVisit = async () => {
  try {
    if (!supabase) return;
    
    await supabase.from('quiz_analytics').insert({
      event_type: 'visit',
      timestamp: new Date(),
    });
  } catch (error) {
    console.error('Error tracking visit:', error);
  }
};

/**
 * Guardar resultados del quiz
 */
export const saveQuizResult = async (quizData) => {
  try {
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('quiz_sessions')
      .insert({
        answers: quizData.answers,
        ux_score: quizData.scores.ux,
        ui_score: quizData.scores.ui,
        dev_score: quizData.scores.dev,
        dominant_profile: quizData.dominantProfile,
        vocational_route: quizData.vocationalRoute,
        completed: true,
        created_at: new Date(),
      })
      .select();

    return data;
  } catch (error) {
    console.error('Error saving quiz result:', error);
    return null;
  }
};

/**
 * Obtener estadísticas del quiz
 */
export const getQuizStats = async () => {
  try {
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('quiz_sessions')
      .select('*')
      .eq('completed', true);

    if (error) throw error;

    // Procesar estadísticas
    const stats = {
      totalCompleted: data?.length || 0,
      uxCount: data?.filter(d => d.dominant_profile === 'ux').length || 0,
      uiCount: data?.filter(d => d.dominant_profile === 'ui').length || 0,
      devCount: data?.filter(d => d.dominant_profile === 'dev').length || 0,
      routeBreakdown: {},
    };

    // Contar rutas
    data?.forEach(session => {
      if (session.vocational_route) {
        stats.routeBreakdown[session.vocational_route] = 
          (stats.routeBreakdown[session.vocational_route] || 0) + 1;
      }
    });

    return stats;
  } catch (error) {
    console.error('Error fetching quiz stats:', error);
    return null;
  }
};

/**
 * Obtener tendencias recientes (últimos 30 días)
 */
export const getRecentTrends = async () => {
  try {
    if (!supabase) return null;

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const { data, error } = await supabase
      .from('quiz_sessions')
      .select('created_at, dominant_profile')
      .gte('created_at', thirtyDaysAgo.toISOString())
      .eq('completed', true);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error fetching recent trends:', error);
    return null;
  }
};
