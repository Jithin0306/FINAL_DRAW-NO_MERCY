import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ActiveColor, UnoCardData } from '../types/uno';
import { groupSortedHandByColor } from '../utils/handSorting';
import { canPlayCard } from '../utils/deckBuilder';
import { UnoCard } from './UnoCard';
import { soundFX } from '../utils/soundEffects';

interface PlayerHandProps {
  cards: UnoCardData[];
  topCard: UnoCardData;
  activeColor: ActiveColor;
  isPlayerTurn: boolean;
  pendingPenalty: number;
  onPlayCard: (card: UnoCardData) => void;
}

export const PlayerHand: React.FC<PlayerHandProps> = ({
  cards,
  topCard,
  activeColor,
  isPlayerTurn,
  pendingPenalty,
  onPlayCard,
}) => {
  const [winWidth, setWinWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1366
  );

  useEffect(() => {
    const onResize = () => setWinWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Automatically sort and partition into strict color groups:
  // RED (numbers -> specials) | BLUE (numbers -> specials) | GREEN | YELLOW | WILD
  const colorGroups = useMemo(() => groupSortedHandByColor(cards), [cards]);
  const totalCards = cards.length;
  const groupCount = colorGroups.length;

  /**
   * Exact responsive geometry so 100% of cards ALWAYS fit within the screen
   * on both Desktop (100% zoom) and Mobile phones (Portrait & Landscape):
   * - Card width: `sm` is 68px (mobile), `md` is 102px, `lg` is 116px.
   */
  const isMobileViewport = winWidth <= 768;
  const useCompactCardSize = totalCards >= 11 || winWidth < 1360;
  const cardRenderSize: 'sm' | 'md' | 'lg' = isMobileViewport
    ? 'sm'
    : useCompactCardSize
    ? 'md'
    : 'lg';
  const cardWidthPx =
    cardRenderSize === 'sm' ? 68 : cardRenderSize === 'md' ? 102 : 116;

  // Leave horizontal safety margin so cards stay comfortably inside the playable table zone
  // and clear the bottom-left player avatar pill and bottom-right DING/DRAW action controls
  const sideHudMargin = isMobileViewport ? 18 : winWidth <= 1180 ? 210 : 250;
  const availableW = Math.max(
    isMobileViewport ? 280 : 320,
    winWidth - sideHudMargin
  );

  // Gap between color groups (Red | Blue | Green | Yellow | Wild)
  const groupGapPx = isMobileViewport
    ? totalCards <= 8
      ? 8
      : totalCards <= 14
      ? 5
      : 3
    : totalCards <= 9
    ? 22
    : totalCards <= 14
    ? 16
    : totalCards <= 19
    ? 12
    : 9;

  const totalGroupGapsWidth = Math.max(0, groupCount - 1) * groupGapPx;
  const totalOverlapsCount = Math.max(1, totalCards - groupCount);

  // Net horizontal advance allowed per overlapping card so the entire hand fits in `availableW`
  const allowedStepPerOverlap =
    (availableW - totalGroupGapsWidth - groupCount * cardWidthPx) /
    totalOverlapsCount;

  // Convert step advance to CSS `margin-left`: `margin = step - cardWidthPx`
  const rawNegativeMargin = Math.floor(allowedStepPerOverlap - cardWidthPx);

  // Keep enough of each card's left edge visible so corner numbers/symbols are always readable
  const minVisibleStrip = isMobileViewport ? 16 : 24;
  const minOverlapMargin = -(cardWidthPx - minVisibleStrip);
  const maxOverlapMargin = isMobileViewport
    ? -26
    : useCompactCardSize
    ? -48
    : -42;
  const dynamicOverlapMarginPx = Math.max(
    minOverlapMargin,
    Math.min(maxOverlapMargin, rawNegativeMargin)
  );

  // Compute exact resulting row width; if still wider than `availableW` (e.g., 20-24 cards on a compact mobile screen),
  // scale the row down proportionally so 100% of cards are guaranteed visible on screen!
  const estimatedRowWidth =
    totalGroupGapsWidth +
    groupCount * cardWidthPx +
    totalOverlapsCount * (cardWidthPx + dynamicOverlapMarginPx);

  const rowAutoScale =
    estimatedRowWidth > availableW
      ? Math.max(
          isMobileViewport ? 0.52 : 0.68,
          (availableW - (isMobileViewport ? 8 : 16)) / estimatedRowWidth
        )
      : 1;

  let runningCardIndex = 0;

  return (
    <div className="player-foreground-hand-stage">
      {/* Subtle Ambient Turn Glow beneath the Player's Hand on the Felt */}
      <div
        className={`player-hand-felt-aura ${
          isPlayerTurn ? 'is-active-turn' : ''
        }`}
      />

      {/* Prominent High-Visibility YOUR TURN Banner */}
      <AnimatePresence>
        {isPlayerTurn && (
          <motion.div
            key="your-turn-pill"
            className="player-your-turn-banner-anchor"
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.92 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="player-your-turn-banner">
              <span className="your-turn-dot" />
              <span className="your-turn-label">YOUR TURN</span>
              <span className="your-turn-dot" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="player-hand-scroll-viewport">
        <div
          className="player-hand-groups-row"
          style={{
            gap: `${groupGapPx}px`,
            transform: `scale(${rowAutoScale})`,
            transformOrigin: 'bottom center',
          }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {colorGroups.map((group, groupIdx) => {
              const normalizedGroupOffset =
                groupCount > 1 ? groupIdx / (groupCount - 1) - 0.5 : 0;

              return (
                <motion.div
                  key={`color-group-${group.color}`}
                  className={`hand-color-cluster cluster-${group.color}`}
                  initial={{ opacity: 0, y: 24, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    y:
                      Math.abs(normalizedGroupOffset) *
                      (isMobileViewport ? 2 : 5),
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.85, y: 15 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 26,
                  }}
                  style={{
                    zIndex: 10 + groupIdx,
                  }}
                >
                  {/* Subtle glowing color bar reflected onto the table surface under each color group */}
                  <div
                    className={`cluster-felt-reflection reflection-${group.color}`}
                  />

                  <div className="cluster-cards-fan">
                    {group.cards.map((card, idxInGroup) => {
                      const globalIndex = runningCardIndex++;
                      const normalizedPos =
                        totalCards > 1
                          ? (globalIndex / (totalCards - 1)) * 2 - 1
                          : 0;

                      const fanAngle =
                        normalizedPos *
                        (isMobileViewport
                          ? 4.2
                          : totalCards > 16
                          ? 5.5
                          : 8.5);
                      const archDrop =
                        Math.pow(Math.abs(normalizedPos), 1.6) *
                        (isMobileViewport ? 4 : 8);

                      const isPlayable =
                        isPlayerTurn &&
                        canPlayCard(card, topCard, activeColor, pendingPenalty);

                      return (
                        <motion.div
                          key={card.id}
                          className={`hand-card-slot ${
                            idxInGroup > 0 ? 'overlap-prev' : 'first-in-group'
                          } ${isPlayable ? 'slot-playable' : 'slot-idle'}`}
                          initial={{
                            opacity: 0,
                            y: -70,
                            scale: 0.7,
                            rotate: -8,
                          }}
                          animate={{
                            opacity: 1,
                            y: isPlayable
                              ? archDrop - (isMobileViewport ? 4 : 6)
                              : archDrop,
                            scale: 1,
                            rotate: fanAngle,
                          }}
                          exit={{
                            opacity: 0,
                            y: -120,
                            scale: 0.82,
                            rotate: 5,
                            transition: { duration: 0.2 },
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 340,
                            damping: 26,
                            mass: 0.68,
                          }}
                          style={{
                            marginLeft:
                              idxInGroup > 0
                                ? `${dynamicOverlapMarginPx}px`
                                : '0px',
                            zIndex: 20 + globalIndex,
                          }}
                          onMouseEnter={() => {
                            soundFX.playCardHover();
                          }}
                          onClick={() => {
                            if (isPlayable) {
                              onPlayCard(card);
                            }
                          }}
                        >
                          <div className="card-hover-elevator">
                            <UnoCard
                              card={card}
                              size={cardRenderSize}
                              playable={isPlayable}
                              dimmed={isPlayerTurn && !isPlayable}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
