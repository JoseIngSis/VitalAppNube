import Constants from 'expo-constants';
import { Platform } from 'react-native';

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║              VitalApp — Configuración de API URL                 ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  Prioridad de detección:                                         ║
 * ║  1. EXPO_PUBLIC_API_URL (del .env.local — túnel público)         ║
 * ║  2. IP automática del servidor de desarrollo (red local)         ║
 * ║  3. localhost (solo para web/emulador)                           ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */
const getApiUrl = (): string => {
  // En producción (Vercel), tomamos la variable de entorno obligatoriamente.
  // En local, usamos un fallback a localhost si no está definida en .env
  return process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5000/api';
};

export const API_URL = getApiUrl();
