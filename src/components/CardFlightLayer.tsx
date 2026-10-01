import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardFlight, SeatPosition, TableSpecialEffect } from '../types/uno';
import { UnoCard, UnoCardBack } from './UnoCard';

interface CardFlightLayerProps {
  flights: CardFlight[];
  effects: TableSpecialEffect[];
}

// Normalized coordinates (% of viewport/stage) for seats and center piles
const SEAT_COORDS: Record<SeatPosition | 'draw_pile' | 'discard_pile', { x: string; y: string; rot: number }> = {
  bottom: { x: '50%', y: '82%', rot: 0 },
  left: { x: '16%', y: '48%', rot: 75 },
  top: { x: '50%', y: '18%', rot: 180 },
  right: { x: '84%', y: '48%', rot: -75 },
  draw_pile: { x: '44.5%', y: '46.5%', rot: -6 },
  discard_pile: { x: '55.5%', y: '46.5%', rot: 5 },
};

function getEffectVariantClass(fx: TableSpecialEffect): string {
  const lbl = (fx.label || '').toUpperCase();
  if (lbl.includes('DING')) return 'callout-ding';
  if (lbl.includes('REVERSE')) return 'callout-reverse';
  if (lbl.includes('SWAP') || lbl.includes('ROTATE')) return 'callout-swap';
  if (lbl.includes('CARDS') || lbl.includes('PENALTY') || lbl.includes('KO')) return 'callout-penalty';
  if (lbl.includes('SKIP')) return 'callout-skip';
  if (lbl.includes('TIMEOUT') || lbl.includes('AUTO')) return 'callout-timeout';
  if (lbl.includes('HOST')) return 'callout-host';
  if (fx.color) return `callout-color-${fx.color}`;
  return 'callout-gold';
}

function getEffectIcon(fx: TableSpecialEffect): string {
  const lbl = (fx.label || '').toUpperCase();
  if (lbl.includes('DING')) return '🔔';
  if (lbl.includes('REVERSE')) return '⇄';
  if (lbl.includes('SWAP')) return '🔄';
  if (lbl.includes('ROTATE')) return '🌐';
  if (lbl.includes('CARDS') || lbl.includes('PENALTY')) return '💥';
  if (lbl.includes('SKIP')) return '⊘';
  if (lbl.includes('TIMEOUT') || lbl.includes('AUTO')) return '⏱️';
  if (lbl.includes('HOST')) return '👑';
  return '✦';
}

export const CardFlightLayer: React.FC<CardFlightLayerProps> = ({
  flights,
  effects,
}) => {
  return (
    <div className="table-flight-and-fx-layer" aria-hidden="true">
      {/* 1. Flying Cards with 3D Parabolic Arc and Table Shadow */}
      <AnimatePresence>
        {flights.map((flight) => {
          const from = SEAT_COORDS[flight.fromSeat];
          const to = SEAT_COORDS[flight.toSeat];
          const startScale = flight.fromSeat === 'bottom' ? 1.08 : 0.74;
          const endScale = flight.toSeat === 'bottom' ? 1.02 : 0.88;

          return (
            <motion.div
              key={flight.id}
              className="flying-card-actor"
              initial={{
                left: from.x,
                top: from.y,
                scale: startScale,
                rotate: from.rot,
                opacity: 0.95,
              }}
              animate={{
                left: to.x,
                top: to.y,
                scale: [startScale, 1.26, endScale],
                rotate: to.rot + (flight.card.discardRotation ?? 0),
                opacity: 1,
              }}
              exit={{
                scale: 0.94,
                opacity: 0,
                transition: { duration: 0.14 },
              }}
              transition={{
                duration: 0.56,
                delay: (flight.delayMs ?? 0) / 1000,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flying-card-shadow-wrapper">
                {flight.faceUp ? (
                  <UnoCard card={flight.card} size="md" />
                ) : (
                  <UnoCardBack size="md" />
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* 2. Prominent, Cinematic Table Special Effect Animations */}
      <AnimatePresence>
        {effects.map((fx) => {
          const variantClass = getEffectVariantClass(fx);
          const icon = getEffectIcon(fx);

          if (fx.type === 'reverse') {
            return (
              <motion.div
                key={fx.id}
                className="fx-reverse-orbit-ring"
                initial={{ scale: 0.6, opacity: 0, rotate: -40 }}
                animate={{ scale: 1.15, opacity: 1, rotate: 220 }}
                exit={{ scale: 1.35, opacity: 0 }}
                transition={{ duration: 1.25, ease: 'easeOut' }}
              >
                <div className="fx-reverse-ring-graphic" />
                <div className="fx-prominent-callout callout-reverse">
                  <span className="callout-icon">⇄</span>
                  <span className="callout-text">{fx.label || 'REVERSE! DIRECTION CHANGED'}</span>
                </div>
              </motion.div>
            );
          }

          if (fx.type === 'draw_penalty' && fx.targetSeat) {
            const targetPos = SEAT_COORDS[fx.targetSeat];
            return (
              <motion.div
                key={fx.id}
                className="fx-seat-penalty-pulse"
                style={{ left: targetPos.x, top: targetPos.y }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [0.6, 1.25, 1], opacity: 1 }}
                exit={{ scale: 1.4, opacity: 0 }}
                transition={{ duration: 1.35 }}
              >
                <div className="penalty-shockwave" />
                <div className="penalty-floating-badge">
                  <span className="penalty-flame">💥</span>
                  <span className="penalty-count">+{fx.penaltyAmount ?? 2} CARDS</span>
                </div>
              </motion.div>
            );
          }

          if (fx.type === 'seven_swap' || fx.type === 'zero_rotate') {
            return (
              <motion.div
                key={fx.id}
                className="fx-table-swap-sweep"
                initial={{ scale: 0.65, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 1 }}
                exit={{ scale: 1.25, opacity: 0 }}
                transition={{ duration: 1.35 }}
              >
                <div className="swap-orbit-arrows" />
                <div className="fx-prominent-callout callout-swap">
                  <span className="callout-icon">{fx.type === 'seven_swap' ? '🔄' : '🌐'}</span>
                  <span className="callout-text">
                    {fx.label || (fx.type === 'seven_swap' ? '7 • HAND SWAP' : '0 • ALL HANDS ROTATE')}
                  </span>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={fx.id}
              className="fx-generic-callout-wrap"
              initial={{ y: 22, opacity: 0, scale: 0.85 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -18, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 380, damping: 25 }}
            >
              <div className={`fx-prominent-callout ${variantClass}`}>
                <span className="callout-icon">{icon}</span>
                <span className="callout-text">{fx.label}</span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
