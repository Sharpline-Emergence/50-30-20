
Copy

/**
 * Sharpline — 50/30/20 Budget Calculator
 * calculator.js
 *
 * Handles:
 *  - Income period conversion to monthly
 *  - 50/30/20 split calculation
 *  - DOM updates for results table & summary boxes
 *  - Accessibility: smooth scroll + aria-live region update
 *  - Footer year auto-update
 */
 
'use strict';
 
/* ============================================================
   Constants
   ============================================================ */
 
/** Multipliers to convert any period to months-per-year, then /12. */
const PERIOD_TO_MONTHLY = {
  monthly:  1,
  annual:   1 / 12,
  weekly:   52 / 12,
  biweekly: 26 / 12,
};
 
/** Budget split ratios. */
const SPLIT = {
  needs:   0.50,
  wants:   0.30,
  savings: 0.20,
};
 
/* ============================================================
   Utilities
   ============================================================ */
 
/**
 * Format a numeric value as a currency string.
 *
 * @param {string} symbol  - Currency symbol (e.g. "$", "R$", "£")
 * @param {number} value   - Numeric amount to format
 * @returns {string}       - Formatted string, e.g. "$1,250.00"
 */
function formatCurrency(symbol, value) {
  const formatted = value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${symbol}${formatted}`;
}
 
/**
 * Convert an income amount to a monthly equivalent.
 *
 * @param {number} amount  - Raw income figure
 * @param {string} period  - One of: 'monthly' | 'annual' | 'weekly' | 'biweekly'
 * @returns {number}       - Monthly equivalent
 */
function toMonthly(amount, period) {
  const multiplier = PERIOD_TO_MONTHLY[period] ?? 1;
  return amount * multiplier;
}
 
/**
 * Set the text content of a DOM element by ID.
 *
 * @param {string} id    - Element ID
 * @param {string} text  - Text to set
 */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
 
/* ============================================================
   Core calculation
   ============================================================ */
 
/**
 * Read inputs, calculate split, and update the DOM.
 * Called by the button click and Enter keypress.
 */
function calculate() {
  const incomeInput = document.getElementById('income');
  const currencyEl  = document.getElementById('currency');
  const periodEl    = document.getElementById('period');
 
  const raw    = parseFloat(incomeInput.value);
  const symbol = currencyEl.value;
  const period = periodEl.value;
 
  /* ---- Validation ---- */
  if (!raw || raw <= 0 || !isFinite(raw)) {
    incomeInput.focus();
    incomeInput.setAttribute('aria-invalid', 'true');
    alert('Please enter a valid income amount greater than zero.');
    return;
  }
 
  incomeInput.removeAttribute('aria-invalid');
 
  /* ---- Calculate ---- */
  const monthly  = toMonthly(raw, period);
  const needs    = monthly * SPLIT.needs;
  const wants    = monthly * SPLIT.wants;
  const savings  = monthly * SPLIT.savings;
 
  /* ---- Update summary boxes ---- */
  setText('needsAmt',   formatCurrency(symbol, needs));
  setText('wantsAmt',   formatCurrency(symbol, wants));
  setText('savingsAmt', formatCurrency(symbol, savings));
 
  /* ---- Update breakdown table ---- */
  setText('needsM',   formatCurrency(symbol, needs));
  setText('needsY',   formatCurrency(symbol, needs   * 12));
  setText('wantsM',   formatCurrency(symbol, wants));
  setText('wantsY',   formatCurrency(symbol, wants   * 12));
  setText('savingsM', formatCurrency(symbol, savings));
  setText('savingsY', formatCurrency(symbol, savings * 12));
 
  /* ---- Reveal results & scroll into view ---- */
  const resultsCard = document.getElementById('resultsCard');
  if (resultsCard) {
    resultsCard.classList.remove('hidden');
    resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
 
/* ============================================================
   Event listeners
   ============================================================ */
 
document.addEventListener('DOMContentLoaded', () => {
 
  /* Calculate button */
  const btn = document.getElementById('calcBtn');
  if (btn) btn.addEventListener('click', calculate);
 
  /* Allow Enter key in income field */
  const incomeInput = document.getElementById('income');
  if (incomeInput) {
    incomeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') calculate();
    });
  }
 
  /* Auto-update footer year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
 
});
