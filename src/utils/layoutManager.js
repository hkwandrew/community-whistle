/**
 * Manages text overflow by dynamically adjusting font sizes
 * when content exceeds container width
 */

export function manageTextOverflow(selector, options = {}) {
  const {
    maxFontSize = 24,
    minFontSize = 14,
    step = 1,
    maxIterations = 30,
    containerSelector = null,
    callback = null
  } = options

  const elements = document.querySelectorAll(selector)
  if (elements.length === 0) return

  elements.forEach((element) => {
    const container = containerSelector
      ? element.closest(containerSelector)
      : element.parentElement
    const target = container || element

    const fit = (iteration = 0) => {
      if (!target) return
      if (iteration > maxIterations) return

      const computedStyle = window.getComputedStyle(element)
      const currentFontSize = parseFloat(computedStyle.fontSize)
      const clampedFontSize = Math.min(currentFontSize, maxFontSize)

      if (clampedFontSize !== currentFontSize) {
        element.style.fontSize = `${clampedFontSize}px`
      }

      const isOverflowing = element.scrollWidth > target.clientWidth

      if (isOverflowing && clampedFontSize > minFontSize) {
        const newFontSize = Math.max(minFontSize, clampedFontSize - step)
        element.style.fontSize = `${newFontSize}px`

        // Allow the DOM to reflow before rechecking
        requestAnimationFrame(() => fit(iteration + 1))
      } else if (callback) {
        callback(element, clampedFontSize)
      }
    }

    fit()
  })
}

/**
 * Batch manage multiple selectors with different configs
 */
export function manageMultipleOverflows(configs = []) {
  configs.forEach(({ selector, ...options }) => {
    manageTextOverflow(selector, options)
  })
}

/**
 * Reset font sizes to their computed default values
 */
export function resetFontSizes(selector) {
  const elements = document.querySelectorAll(selector)
  elements.forEach(element => {
    element.style.fontSize = ''
  })
}

/**
 * Watch for overflow and adjust in real-time
 */
export function observeTextOverflow(selector, options = {}) {
  const {
    maxFontSize = 24,
    minFontSize = 14,
    step = 1,
    debounceMs = 300
  } = options

  const elements = document.querySelectorAll(selector)
  if (elements.length === 0) return () => {} // Return no-op unsubscribe

  let debounceTimer
  const resizeObserver = new ResizeObserver(() => {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      elements.forEach(element => {
        manageTextOverflow(selector, options)
      })
    }, debounceMs)
  })

  elements.forEach(element => {
    resizeObserver.observe(element.parentElement || element)
  })

  // Return unsubscribe function
  return () => {
    clearTimeout(debounceTimer)
    resizeObserver.disconnect()
  }
}
