import React from 'react';
import { Sparkles, ShieldCheck, Flame, Bell, HelpCircle, Layers, Swords } from 'lucide-react';

export const GameGuideSection: React.FC = () => {
  return (
    <section className="fd-guide-section" aria-labelledby="guide-main-heading">
      <div className="fd-guide-inner">
        {/* Section Header */}
        <header className="fd-guide-header">
          <div className="fd-guide-badge">
            <Sparkles size={14} className="text-amber-400" />
            <span>COMPLETE PLAYER HANDBOOK &amp; RULES</span>
          </div>
          <h2 id="guide-main-heading" className="fd-guide-title">
            WHAT IS FINAL DRAW?
          </h2>
          <p className="fd-guide-lead">
            <strong>Final Draw</strong> is an intense, real-time multiplayer card game engineered for razor-sharp tactical plays and ruthless showdowns. Set around an atmospheric digital billiards salon, players race to empty their hands by matching colors, numbers, and symbols while dodging staggering draw stacks, 7-0 hand transfers, and the unforgiving <strong>25-card Mercy Knockout</strong>.
          </p>
        </header>

        {/* 3-Step Strategy Pillars */}
        <div className="fd-guide-grid">
          <article className="fd-guide-card">
            <div className="fd-card-icon-wrap box-red">
              <Swords size={22} />
            </div>
            <h3 className="fd-card-title">1. Match &amp; Counter</h3>
            <p className="fd-card-text">
              Match cards by color or rank. Deploy aggressive tactical action cards including <em>Skip Everyone</em> to claim extra turns, and <em>Discard All</em> to dump entire color clusters onto the table in a single breath.
            </p>
          </article>

          <article className="fd-guide-card">
            <div className="fd-card-icon-wrap box-amber">
              <Flame size={22} />
            </div>
            <h3 className="fd-card-title">2. Stacking &amp; Mercy KO</h3>
            <p className="fd-card-text">
              Under attack by a <code>+2</code>, <code>+4</code>, <code>+6</code>, or massive <code>+10</code>? Deflect the assault by stacking a card of equal or greater value to compound the total penalty onto the next contender. Anyone hitting 25 cards is instantly eliminated!
            </p>
          </article>

          <article className="fd-guide-card">
            <div className="fd-card-icon-wrap box-gold">
              <Bell size={22} />
            </div>
            <h3 className="fd-card-title">3. Call DING! On Final Card</h3>
            <p className="fd-card-text">
              Down to your last remaining card? You must call <strong>DING!</strong> before completing your move. If you forget and another player calls you out, draw penalty cards and face the wrath of the table.
            </p>
          </article>
        </div>

        {/* Deep Dive: What Does "DING!" Mean? */}
        <div className="fd-callout-feature">
          <div className="fd-callout-header">
            <div className="fd-callout-pill">THE SIGNATURE CALLOUT</div>
            <h3 className="fd-callout-title">What Does &ldquo;DING!&rdquo; Mean in Final Draw?</h3>
          </div>
          <div className="fd-callout-body">
            <p>
              In Final Draw, <strong>&ldquo;DING!&rdquo;</strong> is the critical announcement made when a player holds exactly one card remaining. Just as a bell announces the final lap of a high-speed race or the last round in a championship ring, calling <strong>DING!</strong> signals to the table that you are one turn away from total victory.
            </p>
            <div className="fd-callout-points">
              <div className="fd-point-item">
                <span className="fd-point-bullet">◆</span>
                <div>
                  <strong>Timing is Everything:</strong> Hit the glowing gold <strong>DING!</strong> button on your interface as soon as you hold 1 card (or while playing down to 1 card on your active turn).
                </div>
              </div>
              <div className="fd-point-item">
                <span className="fd-point-bullet">◆</span>
                <div>
                  <strong>The Penalty Trap:</strong> If an attentive opponent notices your single card before you call DING!, you are caught vulnerable and slapped with mandatory penalty draws.
                </div>
              </div>
              <div className="fd-point-item">
                <span className="fd-point-bullet">◆</span>
                <div>
                  <strong>The Card Backs:</strong> The back of every card is forged in luxury obsidian and gold displaying <strong>DING</strong>, a constant visual reminder that the final draw can arrive at any moment.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Modes Comparison */}
        <div className="fd-modes-section">
          <h3 className="fd-subheading">
            <Layers size={20} className="text-emerald-400" />
            <span>Choose Your Table Arena</span>
          </h3>
          <div className="fd-modes-grid">
            <div className="fd-mode-box mode-no-mercy">
              <div className="fd-mode-tag tag-rose">COMPETITIVE SHOWDOWN</div>
              <h4 className="fd-mode-title">No Mercy Mode (168 Cards)</h4>
              <ul className="fd-mode-list">
                <li><strong>25-Card Mercy KO:</strong> Any player holding 25+ cards is immediately knocked out of the match.</li>
                <li><strong>Ruthless Stacking:</strong> Chain +2, +4, +6, and +10 cards to deal up to +30 card penalties.</li>
                <li><strong>7-0 Mindgames:</strong> 7 swaps your hand with any player; 0 forces everyone to pass hands in turn order.</li>
                <li><strong>Color Roulette:</strong> Forces the next opponent to flip deck cards until revealing the target color.</li>
                <li><strong>Draw Until Playable:</strong> Keep drawing until you get a matching card or get knocked out.</li>
              </ul>
            </div>

            <div className="fd-mode-box mode-classic">
              <div className="fd-mode-tag tag-amber">PURE TRADITION</div>
              <h4 className="fd-mode-title">Classic Final Draw (108 Cards)</h4>
              <ul className="fd-mode-list">
                <li><strong>Traditional Cadence:</strong> Clean, timeless ruleset matching standard party card games.</li>
                <li><strong>Single Draw Turn:</strong> If you cannot play, draw a single card and pass if unplayable.</li>
                <li><strong>Standard Action Deck:</strong> Skips, Reverses, +2 Draw, and classic Wild cards.</li>
                <li><strong>Pure Strategic Racing:</strong> Out-maneuver opponents without elimination knockouts.</li>
                <li><strong>DING! Callout:</strong> Mandatory 1-card callout remains in full effect.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="fd-faq-container">
          <div className="fd-faq-header">
            <HelpCircle size={22} className="text-amber-400" />
            <h3 className="fd-subheading-clean">Frequently Asked Questions (FAQ)</h3>
          </div>
          <div className="fd-faq-list">
            <details className="fd-faq-item">
              <summary className="fd-faq-summary">
                <span>How do I play with friends online in Final Draw?</span>
                <span className="fd-faq-chevron">▾</span>
              </summary>
              <div className="fd-faq-content">
                <p>
                  Click <strong>&ldquo;PLAY WITH FRIENDS&rdquo;</strong> on the home screen to create a private room. You will receive a unique 5-letter room code (e.g., <code>#X7K9P</code>) and an invite link. Share the link or code with up to 3 friends to join your private table. Since Final Draw uses direct peer-to-peer WebRTC connections, gameplay is instant, low-latency, and requires zero account registration.
                </p>
              </div>
            </details>

            <details className="fd-faq-item">
              <summary className="fd-faq-summary">
                <span>What does DING! mean in Final Draw?</span>
                <span className="fd-faq-chevron">▾</span>
              </summary>
              <div className="fd-faq-content">
                <p>
                  <strong>DING!</strong> is the compulsory callout when a player holds only one card remaining in their hand. The back of every card prominently displays <strong>DING</strong> within a luxury gold-ruled border. If a player fails to call <strong>DING!</strong> before ending their turn and an opponent catches them, they must draw penalty cards from the Draw Pile.
                </p>
              </div>
            </details>

            <details className="fd-faq-item">
              <summary className="fd-faq-summary">
                <span>What happens if the room host leaves the match?</span>
                <span className="fd-faq-chevron">▾</span>
              </summary>
              <div className="fd-faq-content">
                <p>
                  Final Draw features <strong>Seamless Host Migration</strong>. If the original host leaves or closes their tab, host authority is instantly and automatically transferred to the next connected player. The departed seat converts into a smart AI bot holding their exact hand so the game never stutters or halts.
                </p>
              </div>
            </details>

            <details className="fd-faq-item">
              <summary className="fd-faq-summary">
                <span>Can I play Final Draw offline against bots?</span>
                <span className="fd-faq-chevron">▾</span>
              </summary>
              <div className="fd-faq-content">
                <p>
                  Yes! Click <strong>&ldquo;QUICK PLAY • 1v1 DUEL&rdquo;</strong> or choose <strong>&ldquo;CUSTOM MATCH&rdquo;</strong> to configure a local match against 1, 2, or 3 intelligent cyber-bots. All game modes, turn timers, and stacking mechanics operate fully offline in your browser.
                </p>
              </div>
            </details>

            <details className="fd-faq-item">
              <summary className="fd-faq-summary">
                <span>How does Final Draw protect player privacy?</span>
                <span className="fd-faq-chevron">▾</span>
              </summary>
              <div className="fd-faq-content">
                <p>
                  Final Draw follows privacy-by-design under the Digital Personal Data Protection (DPDP) standards. We collect zero passwords, emails, or tracking telemetry. Game state is exchanged strictly peer-to-peer between table participants, and custom avatar photos remain saved locally in your own browser cache. You can view, download, or clear your local data anytime from the Privacy Hub.
                </p>
              </div>
            </details>
          </div>
        </div>

        {/* Security & Fair Play Guarantee */}
        <div className="fd-trust-strip">
          <div className="fd-trust-item">
            <ShieldCheck size={18} className="text-emerald-400" />
            <span>Zero Sign-up Required</span>
          </div>
          <div className="fd-trust-item">
            <ShieldCheck size={18} className="text-emerald-400" />
            <span>P2P WebRTC Encryption</span>
          </div>
          <div className="fd-trust-item">
            <ShieldCheck size={18} className="text-emerald-400" />
            <span>Privacy-First DPDP Compliant Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
};
